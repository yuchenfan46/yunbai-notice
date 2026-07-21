/**
 * platform-notices.js
 * 渲染"云平台注意事项"三个 Accordion 条目并注入到 #platform-notices-container
 */
(function () {
    const items = [
        {
            title: '1. 家庭宽带(Residential)声明与风险告知',
            colorClass: 'doc-1',
            content: `
                <div class="header">
                    <h1>家庭宽带 (Residential IP) 业务声明</h1>
                    <div class="subtitle">深度声明与购买风险准则</div>
                </div>
                <p>由于全球 IPv4 资源的枯竭以及上游数据中心（IDC）针对 IP 库属性的动态调整，目前市场上的"家宽"定义存在极大的灰色地带。为本着绝对坦诚、不套路的原则，作出如下强制性风险告知：</p>
                <h2>🇩🇪 德国 / 🇬🇧 英国 节点（伪家宽预警）</h2>
                <p><strong>资源本质：</strong> 目前本站交付的德/英两地"家宽"产品，从底层网络架构上来说，<strong>均为 GTT 线路的"伪家宽"</strong>（即通过特定路由或 IP 广播手段，使数据库将其标记为 Residential，但物理层级仍属于机房）。</p>
                <p><strong>适用边界：</strong> 仅适用于对 IP 纯净度要求一般的常规业务。如果您从事的是极度严苛的风控业务（如高难度问卷调查、对物理宽带要求极高的金融/电商平台），<strong>请务必谨慎考虑，我们强烈建议您不要盲目下单</strong>。</p>
                <h2>🇺🇸 美国 节点（盲盒属性说明）</h2>
                <p><strong>真实性免责：</strong> 美国 IP 库的变动极为频繁。对于美国家宽节点的 100% 绝对纯正性，<strong>本平台不做任何无死角的承诺，坦白讲我也无法给出绝对保证</strong>。</p>
                <p><strong>采购建议：</strong> 请务必利用您自己的专业测试手段进行先行甄别。请在确认能够承受 IP 属性随时波动的潜在风险后再行购买。</p>
                <div class="warning-box">
                    <span class="warning-title">唯一硬性的服务保障：流媒体解锁</span>
                    虽然无法保证所有 IP 的绝对原生性，但我方提供唯一的硬性保障协议：<strong>保证流媒体全解锁</strong>。您可以完美流畅地访问包括 Netflix（网飞）、Disney+、Hulu 等主流平台。对线路"纯净风控画像"有极端要求的客户请知悉风险；若主要诉求是解锁流媒体，则可放心使用。
                </div>
            `
        },
        {
            title: '2. 香港服务器自动 DD 纯净重装指南',
            colorClass: 'doc-3',
            content: `
                <div class="header">
                    <h1>系统 DD 纯净重装指南</h1>
                    <div class="subtitle">适用于云平台香港机房服务器</div>
                </div>
                <p><strong>避坑提示：</strong> 本站香港服务器自带的系统模板镜像目前存在一些已知的组件 Bug。为了保障您后续跑业务的绝对稳定，<strong>强烈建议您在控制台首次重装系统后，务必使用 SSH 连入服务器，自己通过一键脚本重新刷入纯净版系统</strong>。</p>
                <h2>第一步：拉取网络重装核心脚本</h2>
                <p>使用 SSH 工具连接服务器后，<strong>点击下方黑框即可一键复制</strong>，然后在终端内右键粘贴并回车执行：</p>
                <div class="copyable-code-box" onclick="copyCodeText(this)" data-clipboard="curl -O https://raw.githubusercontent.com/bin456789/reinstall/main/reinstall.sh || wget -O reinstall.sh $_">
                    curl -O https://raw.githubusercontent.com/bin456789/reinstall/main/reinstall.sh || wget -O reinstall.sh $_
                </div>
                <h2>第二步：执行全自动化重装</h2>
                <p>请根据您的需求，修改下方命令中的参数并执行，通用格式如下：</p>
                <div class="copyable-code-box" onclick="copyCodeText(this)" data-clipboard="bash reinstall.sh 你要重装的系统 --password 你的密码 --ssh-port 你的SSH端口">
                    bash reinstall.sh 你要重装的系统 --password 你的密码 --ssh-port 你的SSH端口
                </div>
                <p><strong>举例说明（同样可点击复制）：</strong><br>
                如果您想重装的系统为 <code>centos10</code>，设置密码为 <code>123456</code>，远程 SSH 连接端口改为 <code>6898</code>，则完整命令如下：</p>
                <div class="copyable-code-box" onclick="copyCodeText(this)" data-clipboard="bash reinstall.sh centos10 --password 123456 --ssh-port 6898">
                    bash reinstall.sh centos10 --password 123456 --ssh-port 6898
                </div>
                <p><strong>参数具体说明：</strong></p>
                <ul>
                    <li><code>centos10</code>：代表你要安装的系统</li>
                    <li><code>123456</code>：代表你服务器重装后的新登录密码</li>
                    <li><code>6898</code>：代表你服务器重装后的新远程 SSH 连接端口</li>
                </ul>
                <h2>第三步：重启并等待</h2>
                <p>代码在终端跑完且无报错后，输入 <code>reboot</code> 重启服务器。系统会断开连接并在后台自动进行底层的格式化与重装。通常需等待 10~20 分钟左右，请使用新密码 and 新端口重新连接即可。</p>
                <div class="project-link-grid" style="margin-top:30px">
                    <a href="https://github.com/bin456789/reinstall" target="_blank" class="project-link-card" title="查看支持的完整系统镜像列表">
                        <div class="project-link-icon" style="color:#24292e;background:rgba(36,41,46,0.08)">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </div>
                        <div class="project-link-body">
                            <div class="project-link-title">官方开源项目地址</div>
                            <div class="project-link-desc">查看脚本支持的完整系统镜像名称列表</div>
                        </div>
                        <div class="project-link-arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                        </div>
                    </a>
                </div>
            `
        },
        {
            title: '3. 售后服务、技术支持与退款规范',
            colorClass: 'doc-2',
            content: `
                <div class="header">
                    <h1>售后服务与技术支持规范</h1>
                    <div class="subtitle">极速响应通道与退款保障政策</div>
                </div>
                <h2>优先唯一的紧急联系通道</h2>
                <p><strong>网站后台工单停用通知：</strong> 本站自带的工单（Ticket）系统目前处于<strong>暂时搁置/不处理状态</strong>。请勿在后台提交工单。</p>
                <p><strong>直连通道：</strong> 任何业务咨询、机器报障、架构疑问，<strong>请务必直接通过即时通讯工具（IM）联系我本人</strong>。</p>
                <ul>
                    <li><strong>QQ / 微信 / 手机 同号：</strong> <code>+44 7749646514</code></li>
                </ul>
                <h2>极速沟通准则（拒绝无效寒暄）</h2>
                <p>为了提高解决效率，极度反感并拒绝回复诸如"在吗？"、"服务器挂了"等毫无信息量的碎片化消息。咨询或报障时请务必在第一条消息中包含以下<strong>[故障三要素]</strong>：</p>
                <ol>
                    <li><strong>出问题的具体资源：</strong> （example：具体的 IP 地址或服务器所在机房）</li>
                    <li><strong>进行了什么操作导致：</strong> （example：刚修改了 SSH 端口 / 装了某个环境扩展）</li>
                    <li><strong>具体的报错信息：</strong> （example：明确的 Error Code 或终端截图）</li>
                </ol>
                <div class="warning-box">
                    <span class="warning-title">💳 退款保障与例外政策</span>
                    <ul style="margin:8px 0 0;padding-left:18px">
                        <li>✅ <strong>常规产品 24 小时无理由退款：</strong> 云服务器自开通起 <strong>24 小时以内</strong>，如觉得网络表现不符预期，可申请全额原路退款。</li>
                        <li>🚫 <strong>特殊业务一经售出概不退款：</strong> <strong>CDN 流量分发类</strong>及<strong>住宅 IP（Residential IP）业务</strong>，一经向上游开通成本即扣除，<strong>没有任何试用期，概不接受退款申请</strong>。</li>
                    </ul>
                </div>
                <h2>🙋 高频问题自助速查</h2>
                <p>以下是客户咨询频率最高的几类问题，如果您遇到类似情况，请先对照自查，大多数情况无需联系客服即可解决：</p>
                <ul>
                    <li><strong>🔌 SSH 连不上？</strong><br>先确认安全组 / 防火墙是否放行了您设置的 SSH 端口；若使用 DD 脚本重装过，请核对您在脚本中指定的新端口和新密码，旧凭据已全部失效。</li>
                    <li><strong>🌐 网站 / 服务无法访问？</strong><br>依次排查：① Nginx/Apache 进程是否正常运行（<code>systemctl status nginx</code>）；② 端口是否被宝塔面板防火墙拦截；③ 域名 DNS 是否已正确解析至服务器 IP。</li>
                    <li><strong>💳 账单扣费 / 续费问题？</strong><br>登录 <a href="https://yunbai.org" target="_blank">yunbai.org</a> 后台，进入「财务」→「账单明细」自查。如有疑问，请带上订单号通过 IM 联系，口头描述无法核实。</li>
                    <li><strong>⚡ 服务器性能跑分 / 测速？</strong><br>推荐使用 <code><a href="https://github.com/spiritLHLS/ecs" target="_blank" rel="noopener noreferrer">融合怪测评脚本</a></code> 一键测速脚本，结果直观全面，测完截图即可。无需另行询问"这台机器性能怎么样"。</li>
                </ul>
                <div class="warning-box">
                    <span class="warning-title">⏰ 响应时效说明</span>
                    本人并非 7×24 小时在线客服。非紧急事项（咨询、配置问题）通常在 <strong>24 小时内</strong>回复；硬件故障、网络中断等紧急问题会优先处理。请理解个人运营的局限性，耐心等待比反复催促更能加快问题解决。
                </div>
                <div class="warning-box">
                    <span class="warning-title">📋 其他须知（读完省去很多麻烦）</span>
                    <ul style="margin:8px 0 0;padding-left:18px">
                        <li><strong>请勿转售本站服务：</strong> 严禁将购买的云资源二次分售或挂靠他人平台经营，一经发现直接封号，余额不退。</li>
                        <li><strong>违法用途零容忍：</strong> 扫描攻击、挖矿、发垃圾邮件、搭建诈骗页面等一律立即封停，情节严重者保留向相关部门举报的权利。</li>
                        <li><strong>数据自备：</strong> 本平台不承诺提供数据备份服务。服务器上的数据请自行做好异地备份，硬件故障导致的数据丢失本人概不负责。</li>
                        <li><strong>IP 被墙处理：</strong> 大陆方向线路 IP 被 GFW 屏蔽，属于不可抗力，<strong>不在退款范围内</strong>。如有需求可联系换 IP，能换则换，具体看库存。</li>
                    </ul>
                </div>
            `
        }
    ];

    function render() {
        const container = document.getElementById('platform-notices-container');
        if (!container) return;

        items.forEach(item => {
            const el = document.createElement('div');
            el.className = 'accordion-item';
            el.innerHTML = `
                <div class="accordion-header">
                    <span>${item.title}</span>
                    <span class="icon">＋</span>
                </div>
                <div class="accordion-content ${item.colorClass}">
                    <div class="inner-text">${item.content}</div>
                </div>
            `;
            container.appendChild(el);
        });

        container.querySelectorAll('.accordion-item').forEach(item => {
            item.querySelector('.accordion-header').addEventListener('click', function () {
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.accordion-item').forEach(i => {
                    i.classList.remove('active');
                    i.querySelector('.icon').innerText = '＋';
                });
                if (!isActive) {
                    item.classList.add('active');
                    item.querySelector('.icon').innerText = '－';
                    setTimeout(() => item.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400);
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', render);
})();
