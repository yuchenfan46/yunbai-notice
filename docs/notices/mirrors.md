# 系统换源与 Docker 安装指南

适用于云平台各类 Linux 服务器，解决国内/海外网络环境下软件包安装慢、镜像拉取失败或 Docker Hub 无法访问等问题。

---

::: tip 避坑提示
由于网络波动或部分镜像站限制，服务器可能无法顺利拉取 Docker 镜像或更新系统软件。推荐使用开源项目 **LinuxMirrors** 一键脚本快速切换为最优可用镜像源。
:::

## 一、GNU/Linux 系统软件源更换

一键自动测速并更换为当前网络环境下速度最快的 Linux 软件源（支持 Debian、Ubuntu、CentOS、Rocky、AlmaLinux、Alpine 等常见系统）：

```bash
bash <(curl -sSL https://linuxmirrors.cn/main.sh)
```

如果无法访问海外原地址，可使用国内 Gitee 镜像执行：

```bash
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/ChangeMirrors.sh)
```

- 脚本运行后会进入交互界面，根据提示输入数字选择对应的镜像源（如阿里云、腾讯云、清华源等）或直接回车默认自动测速选择。

---

## 二、Docker 安装与换源

### 1. 全新安装 Docker（并自动配置镜像源）

如果服务器尚未安装 Docker，使用下方命令可一键完成 Docker CE 安装及镜像加速配置：

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

或使用 Gitee 备用源：

```bash
bash <(curl -sSL https://gitee.com/SuperManito/LinuxMirrors/raw/main/DockerInstallation.sh)
```

### 2. 仅修改现有 Docker 镜像加速源（Registry Mirrors）

如果服务器上已经安装过 Docker，只是遇到镜像拉不下来的情况，**无需重新安装**，只需执行下方命令仅更换 Docker 镜像源：

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh) --only-registry
```

脚本会自动测速并更新 `/etc/docker/daemon.json` 中的 `registry-mirrors`，完成后自动重启 Docker 服务生效。

---

## 开源项目与致谢

- 官方开源项目地址：[SuperManito/LinuxMirrors (GitHub)](https://github.com/SuperManito/LinuxMirrors)
- 官方中文文档与镜像状态：[linuxmirrors.cn](https://linuxmirrors.cn/)
