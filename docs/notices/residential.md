<script setup>
import { ref } from "vue"

const qqCopied = ref(false)

const copyQQ = () => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText("2171129194").then(() => {
      qqCopied.value = true
      setTimeout(() => {
        qqCopied.value = false
      }, 2000)
    })
  } else {
    const input = document.createElement("input")
    input.value = "2171129194"
    document.body.appendChild(input)
    input.select()
    document.execCommand("copy")
    document.body.removeChild(input)
    qqCopied.value = true
    setTimeout(() => {
      qqCopied.value = false
    }, 2000)
  }
}
</script>

# 家庭宽带 (Residential IP) 业务声明

深度声明与购买风险准则

---

由于全球 IPv4 资源的枯竭以及上游数据中心（IDC）针对 IP 库属性的动态调整，目前市场上的“家宽”定义存在极大的灰色地带。为本着绝对坦诚、不套路的原则，作出如下强制性风险告知：

## 🇩🇪 德国 / 🇬🇧 英国 / 🇺🇸 美国 节点（伪家宽预警）

- **资源本质：** 目前本站交付的德/英/美三地常规“家宽”产品，从底层网络架构上来说，**均为伪家宽 / 广播住宅**（即通过特定路由或 IP 广播手段，使数据库将其标记为 Residential，但物理层级仍属于机房）。
- **真实性免责：** IP 库变动极为频繁，对于常规节点的 100% 绝对纯正性，**本平台不做任何无死角的承诺，坦白讲我也无法给出绝对保证**。
- **适用边界与建议：** 仅适用于对 IP 纯净度要求一般的常规业务。如果您从事的是极度严苛的风控业务（如高难度问卷调查、对物理宽带要求极高的金融/电商平台），**请务必谨慎考虑，我们强烈建议您不要盲目下单**，请在确认能够承受 IP 属性随时波动的潜在风险后再行购买。

## 🇺🇸 AT&T 真住宅物理宽带（定制咨询）

- **真实性说明：** 上述常规节点均为广播/伪住宅；如果您确实有严苛业务需求、需要 **AT&T 美国真物理住宅宽带**，可直接联系咨询。
- **拼车与独享价格：** 
  - **拼车合租：** 目前有组织真住宅拼车车位，费用大约为 **20 多元 / 月**；
  - **独立独享：** 如需一人独享整条独立线路与公网 IP，价格另外计算。
- **联系与咨询方式：**
  - **QQ 咨询：** 
    <button @click="copyQQ" style="cursor: pointer; padding: 4px 12px; border-radius: 6px; border: 1px solid var(--vp-c-brand-1, #3eaf7c); background: var(--vp-c-brand-soft, rgba(62,175,124,0.15)); color: var(--vp-c-brand-1, #3eaf7c); font-weight: 500; font-size: 0.95em; transition: all 0.2s; margin-left: 4px;">
      {{ qqCopied ? "✅ 已复制 QQ: 2171129194" : "📋 点击复制 QQ: 2171129194" }}
    </button>
  - **客户服务邮箱：** 
    <a href="mailto:support@mail.yunbai.org" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 12px; border-radius: 6px; border: 1px solid var(--vp-c-brand-1, #3eaf7c); background: var(--vp-c-brand-soft, rgba(62,175,124,0.15)); color: var(--vp-c-brand-1, #3eaf7c); font-weight: 500; text-decoration: none; font-size: 0.95em; margin-left: 4px;">
      ✉️ 打开邮件客户端发送：support@mail.yunbai.org
    </a>

::: tip 唯一硬性的服务保障：流媒体解锁
虽然常规节点无法保证所有 IP 的绝对原生性，但我方提供唯一的硬性保障协议：**保证流媒体全解锁**。您可以完美流畅地访问包括 Netflix（网飞）、Disney+、Hulu 等主流平台。对线路“纯净风控画像”有极端要求的客户请知悉风险；若主要诉求是解锁流媒体，则可放心使用。
:::
