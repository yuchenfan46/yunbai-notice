# 系统 DD 纯净重装指南

适用于云平台服务器

---

::: tip 避坑提示
本站服务器自带的系统模板镜像目前存在一些已知的组件 Bug。为了保障您后续跑业务的绝对稳定，**强烈建议您在控制台首次重装系统后，务必使用 SSH 连入服务器，自己通过一键脚本重新刷入纯净版系统**。
:::

## 第一步：拉取网络重装核心脚本

使用 SSH 工具连接服务器后，在终端内右键粘贴并回车执行：

```bash
curl -O https://raw.githubusercontent.com/bin456789/reinstall/main/reinstall.sh || wget -O reinstall.sh $_
```

## 第二步：执行全自动化重装

请根据您的需求，修改下方命令中的参数并执行，通用格式如下：

```bash
bash reinstall.sh 你要重装的系统 --password 你的密码 --ssh-port 你的SSH端口
```

**举例说明：**  
如果您想重装的系统为 `centos10`，设置密码为 `123456`，远程 SSH 连接端口改为 `6898`，则完整命令如下：

```bash
bash reinstall.sh centos10 --password 123456 --ssh-port 6898
```

- `centos10`：代表你要安装的系统
- `123456`：代表你服务器重装后的新登录密码
- `6898`：代表你服务器重装后的新远程 SSH 连接端口

## 第三步：重启并等待

代码在终端跑完且无报错后，输入 `reboot` 重启服务器。系统会断开连接并在后台自动进行底层的格式化与重装。通常需等待 10~20 分钟左右，请使用新密码和新端口重新连接即可。

- 官方开源项目地址：[bin456789/reinstall (GitHub)](https://github.com/bin456789/reinstall)
