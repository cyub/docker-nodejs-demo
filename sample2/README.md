## 实验1. 原生创建容器实验

```bash
 sudo docker run --name mongo -d mongo:3.6 // 创建mongo容器

sudo docker run  -p 6530:4000  --link mymongo:mongo --name hapi -d  hapi // 创建hapi项目容器
```

## 实验2. 使用docker-compose创建容器实验

### 安装docker-compose

```bash
sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version
```

### 启动

```
sudo docker-compose up -d
sudo docker-compose ps
```