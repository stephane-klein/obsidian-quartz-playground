# Deployment

## Deploy nginx on triton server

```
$ ssh root@triton.servers.stephane-klein.info 'bash -s' < _deploy-nginx.sh
```

## Deploy Quartz content to notes.sklein.xyz

```sh
$ ./scritps/push-quartz-content.sh
```

## Test nginx locally

```sh
$ ./scriptsbuild-quartz.sh
$ docker compose up -d
$ firefox http://localhost:8080
```
