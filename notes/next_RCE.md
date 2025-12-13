## Get into a shell
```
docker exec -it menuwire-nginx-prod sh
```
```
ls -lah /var/log/nginx
```

Typical files:
- access.log
- error.log

## Grep post requests to see malicious RCE
```
docker logs menuwire-nginx-prod | grep -E "_next|__next|action"
```