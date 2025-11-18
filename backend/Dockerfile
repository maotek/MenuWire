FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 UV_LINK_MODE=copy

RUN apt-get update && apt-get install -y --no-install-recommends curl \
  && rm -rf /var/lib/apt/lists/*

# Install uv
RUN curl -LsSf https://astral.sh/uv/install.sh | sh
ENV PATH="/root/.local/bin:${PATH}"

WORKDIR /app

# ---- deps layer ----
COPY pyproject.toml ./

RUN uv sync --no-dev

# ---- app code ----
COPY . .

EXPOSE 8000

# uv run python manage.py populate_db && \

# entrypoint recommended, but if you insist on one-liner:
CMD sh -c "uv run python manage.py collectstatic --noinput && \
           uv run python manage.py migrate --noinput && \
           uv run uvicorn menuwire.asgi:application --host 0.0.0.0 --port 8000"
