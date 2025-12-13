### 1. Spin up Nginx (Bootstrap Mode)
Ensure docker-compose.public.yml is currently pointing to nginx.bootstrap.conf.

```powershell
docker compose -f docker-compose.app.yml -f docker-compose.public.yml up -d nginx
```

### 2. Issue Certificate (One Time)
Run this command to generate the certificates.
*Note: I replaced `sudo` with nothing and `\` with `` ` `` for PowerShell.*

```powershell
docker compose -f docker-compose.app.yml -f docker-compose.public.yml run --rm --entrypoint certbot certbot certonly --webroot --webroot-path /var/www/certbot -d menuwire.duckdns.org --non-interactive --agree-tos --register-unsafely-without-email
```
**Wait for the "Congratulations!" message.**

### 3. Switch to Production Config (CRITICAL STEP)
You must now edit docker-compose.public.yml to use the real Nginx config.

**Change this line:**
```yaml
      - ./nginx/nginx.bootstrap.conf:/etc/nginx/nginx.conf:ro
```
**To this:**
```yaml
      - ./nginx/nginx.public.conf:/etc/nginx/nginx.conf:ro
```

I can do this for you automatically if you want, just ask "Switch to public config".

### 4. Bring Everything Up
Now restart Nginx to load the new config and certificates.

```powershell
docker compose -f docker-compose.app.yml -f docker-compose.public.yml up -d
```
*(Since you changed the compose file in Step 3, Docker will recreate the Nginx container automatically. No need to run `reload` manually).*

### 5. Verify HTTPS
```powershell
curl -I https://menuwire.duckdns.org
```
You should see `HTTP/2 200` (or `HTTP/1.1 200`).