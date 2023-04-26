# 代码审查

# 基础知识

代码通过多次审查和修订来改进，这个过程不是可以单独完成的。在最好的情况下，发现代码设计中的错误是很困难的——而且你越接近工作，就越难批评。这就是代码审查的用武之地。

## 开始：介绍代码审查

### 什么是代码审查？ 

代码通过多次审查和修订来改进，这个过程不是可以单独完成的。在最好的情况下，发现代码设计中的错误是很困难的——而且你越接近工作，就越难批评。这就是代码审查的用武之地。 

简而言之，代码审查是一个或多个开发人员审查其他人的代码，以确保它适合并足以完成手头的任务。一旦编码人员认为代码完整，但在质量保证 (QA) 审查之前以及代码发布到产品中之前，就会执行此操作。 

代码审查是手工完成的，基于进行代码审查的人的专业知识、智慧和判断力。这些审查由自动、机械的审查补充，这些审查通常由 linter 或其他工具进行，寻找特定的行级问题。 

每个版本控制系统（GitHub、GitLab、Bitbucket）使用不同的术语进行代码审查。例如，在 GitHub 中，一旦他们的代码准备好供审查，编码人员就会创建一个拉取请求。他们还可以确定一个或多个人来审查代码，或者经理可以选择人员担任代码审查员，或者任何人都可以自愿。 

代码审查员可以为整个拉取请求留下反馈，也可以通过评论单独留下反馈。一个拉取请求可以有 1-100 条以上的代码审查评论，但这里肯定少得多。强烈建议创建足够小的拉取请求，只需要 1-3 条评论。

代码审查可以涵盖一系列主题：

- 是否遵循团队的风格约定（参见下文，了解有关 linter 和代码审查的更广泛讨论）
- 代码是否满足代码质量特征，例如可读性、效率和安全性
- 架构方法
- 特定领域的主题，即代码的用途是什么（FinTech、DevOps、太空探索等）
- 集成第三方代码的方法
- 潜在的安全风险
- 如果审阅者确定代码具有足够的质量，他们会批准该代码，并且通常会进行 QA 审查。 

如果审阅者认为代码可能不够充分，他们会留下评论、问题、建议或指示，并将代码发回给作者。有时不需要额外的编码——作者向审稿人解释他们的观点。更常见的是，代码被更改。重复此过程，直到审阅者确定代码合适且足够。

代码审查和后续讨论存储在版本控制系统中。任何有权访问该存储库的人也可以访问代码审查评论和讨论。

### ‍代码审查有多普遍？

代码审查非常普遍。事实上，几乎所有软件开发业务都采用这种做法。大约 90% 的中型和大型组织使用代码审查。规模较小的公司估计占 80%。

仅在 GitHub 上，每天就有数千万条代码审查。

使用一些保守的数学计算，仅在过去十年中，就至少创建了 1000 亿条代码审查评论。

这些代码审查评论中的每一条都是对编码人员的工艺反馈的时刻。开发人员可以期望通过代码审查每年至少收到 250 个高度个性化的反馈时刻，并在其职业生涯中收到 7500 个。有些人收到超过 20,000 条反馈。

### 为什么代码审查很重要？

代码审查的好处是三方面的：它们支持代码质量、改进开发人员以及维护软件开发的工艺。

一、代码审查降低了代码质量低下的成本和风险
代码审查可以防止技术债务，例如生产中的错误、安全风险或难以维护的代码。

低代码质量对企业来说代价高昂：它会导致路线图开发速度变慢，导致开发人员流失。较低的代码质量是有风险的——只需查看新闻，了解编码实践中安全漏洞的最新影响。

您的执行团队可能已经在考虑代码质量。埃森哲发现，“C 级高管表示，技术债务——为确保业务蓬勃发展而重新设计 IT 的成本——严重限制了他们的 IT 职能部门的创新能力 (70%)，极大地限制了他们迁移到新技术的能力 (72%) ，并使他们的 IT 功能对市场变化的响应能力大大降低 (69%)。”

将软件开发视为从左到右移动的线性过程。从左边开始，设计软件任务，然后确定范围，然后编码，然后自动审查。之后，它是代码审查 - 我们的重点。一旦代码被更新以考虑审查，它就会被 QAed 并最终发布到生产环境中。

改进越靠左越好：它节省了开发人员的时间和 QA 时间，并改善了用户体验。在代码投入生产后修复代码要昂贵得多，也更痛苦。 

作为软件开发过程的首要质量保证步骤之一，代码审查提供了巨大的“投资回报”。

其次，代码审查提高了开发人员的技能和知识
除了节省时间和金钱之外，代码审查还具有以人为本的价值。根据上面的统计数据，您可以看到代码审查是迄今为止开发人员最常见的教学、指导和反馈方式。

代码审查可能是一个令人难以置信的指导机会，代码作者可以在其中学习有关代码领域的新开发技术和内容。 

Coder/Code Author 向 Reviewer 学习，但 Reviewer 也学习——通过分析其他人的代码，然后将他们的见解付诸写作。教学是最好的学习方式之一。

这些教学/指导时刻有许多后续好处：

更快乐的开发人员——给开发人员成长和学习的机会是让工程师开心的最佳方法之一，因为大多数工程师都非常好奇，喜欢教书，或两者兼而有之
新开发人员或第三方开发人员的更快入职
知识共享——确保组织中的多人理解代码的每个部分 
‍

三、代码审查保障了软件开发的工艺
我们要在这里变得虔诚了一会儿，所以和我们在一起……

代码是一门手艺，而不是一场比赛。

它是一种基于知识和卓越标准的工艺，从高级工程师传给初级工程师。

这是一种建立在设计壮举之上的工艺。以正确的方式构建行之有效的东西，本身就是一种奖励——也是挑战！

这是一门“制作”很重要的工艺——你如何做你所做的事情与你所做的事情一样重要。在工厂流水线上生产木椅不是一门手艺，手工定制建筑才是。

这门手艺为世界带来了难以置信的机会：通过使用软件让人们的生活更美好，并为数以千万计的人创造了惊人的职业机会和激情项目。

在 Sema，我们相信这种工艺伴随着一种责任：一种回馈代码工艺的责任。

在我们看来，代码审查是最好的方法之一。它使我们能够成为我们工艺的好管家 - 确保共享智慧，确保初级开发人员在他们的知识上不断进步，并且代码以正确的方式构建。

我们并不天真。我们知道，提高期限、销售需求和公司压力意味着代码将始终存在技术债务。代码不可能完美，也不应该完美。 

但我们在这里是为了通过更好的评论更容易推进工艺。

### ‍听起来代码审查有很多好处。有问题吗？

没有问题，但只有少数组织能够实现代码审查的全部好处，即使“纸上”有适当的流程。 

这可以归结为多种因素：

开发人员在交付新特性/功能或修复错误时经常面临巨大的时间压力——编码而不是审查代码。这种压力可能包括在 sprint 计划期间没有考虑代码审查时间，并且在年度审查期间没有得到认可
在家工作和分布式团队的兴起意味着代码审查是异步的。当您坐在作者旁边时，审查代码会容易得多，因此他们可以提出后续问题并理解审查者的语气。 
培训投资不足——代码审查是一项需要培训和指导的技能
使代码审查更加健壮和无缝的工具没有跟上其他开发人员工具
因此，组织错失了更好地支持代码质量、知识转移和编码工艺的机会。 

## 我将如何向非技术 CEO 和组织中的其他人解释这些好处？

准备好弥合技术鸿沟！以下是我们将如何向非技术 CEO 解释为什么代码审查很重要。 

### 首先，如果没有指导和学习的文化，您将失去工程师。 

工程师是全球所有公司最需要的职位之一。COVID 和在家工作加速了工程师人才市场的全球化。公司需要积极投资于他们的工程师。如果你没有积极地建立一个伟大的工作场所，那么你就处于人才争夺战的失败端。

为工程师打造理想工作场所的方法之一是营造支持指导的环境。能够在工作中学习和探索不再是一种“特权”，而是一种要求。工程师非常好奇，代码审查是促进学习文化的好方法。 

### 其次，您将快速跟踪新工程师的效率和生产力。 

如果您正在招聘新工程师，或引入第三方开发商店和自由职业者，您希望尽快提升他们。代码审查快速跟踪入职流程。 

有效和无效的入职培训之间的区别是 6 个月或更长时间的生产力损失。低效率的入职意味着浪费财务资源和时间，减慢上市时间，并最终落后于竞争对手。 

### 第三，如果没有代码审查，工程效率和速度将会降低。 

毫无疑问，您的 CEO 一定听说过“10 倍开发人员”的概念，这些开发人员的工作效率比其他所有人都高得多。不管这是否属实，10X 开发人员的想法是通过技能组合的大幅提升来实现的——因此他们能够更好地为代码和团队做出贡献。

将代码审查视为 10 倍的一种手段，而不是一个开发人员，而是许多开发人员。这是一个很好的方式——在我们看来，也许是最好的方式——不断提高整个团队的质量，而不仅仅是个人。这是因为编码从根本上说是一门手艺，而不是一场竞赛——一项严格的技能活动，需要向更有经验的专家学习，并且需要深厚的知识和专注力。对增长和学习的投资越大，其有效性就越高。

Gartner 表示，低绩效和高绩效工程团队之间的生产力差异为 53%。对我们来说，这种估计只是表面上的。

‍
## 代码审查的黄金法则

代码审查员可以通过哪些方式进行良好的代码审查？又名，创建有效代码审查的提示和技巧。
代码审查有六个黄金法则。如果您曾经参与过反馈培训，其中一些可能听起来很熟悉。这是完全正确的——代码审查只是在特定领域提供反馈的一种特定格式。

### 首先，请记住评论的另一端有一个人。

代码审查的第一条黄金法则很简单：审查其他人的代码，就像您希望审查自己的代码一样。

代码审查应该：

- 友善——即使有改进的余地，也可以用同理心传递信息
- 要清楚——让评论者很容易理解你在说什么。重要的是：这意味着如果你有建设性的反馈要给出，那就直截了当。在提出改进建议之前，请避免以对代码的积极反馈开始的“垃圾三明治”，即使它是真实的。 
- 具体一点——你的反馈越细化，对作者的帮助就越大。
- 实际上，当我们中的许多人都在远程工作或相距数百或数千英里时，这可能很难做到。

为了确保您的沟通正确，请大声朗读您的代码审查并问自己，这是我想要对我说的话吗？如果没有，请考虑改变语气或内容。

### 其次，永远不要告诉某人代码需要修复，而没有就修复什么或如何修复它提出建议或建议。 

这是代码审查的第二条黄金法则。 

不知道为什么？想象一下有人来到你家说：“我不喜欢你的装饰。修理它。” 

这是令人难以置信的烦人。

在不提供更多解释的情况下写下“解决这个问题”绝不是一个好主意。为什么需要修复？你有什么建议来解决它？有人怎么可能弄清楚？

如果您留下的代码审查只说“修复此问题”或“做得更好”，我们将代表代码审查权力亲自到您家敲击您的指关节。

### 第三，假设良好的意图。 

代码可能不会按照您的编写方式编写。让我们更清楚地说：代码很少由两个不同的人以相同的方式编写。毕竟，代码是一门手艺，而不是流水线上的任务。 

在审稿过程中激发好奇心和欣赏感——试图理解审稿人的想法的好奇心，以及对 Coder 所做或尝试做的事情的欣赏。

### 第四，明确行动和重要程度。

如果您要提出可选建议，例如，在代码被批准用于生产之前不需要的“nit”，请明确说明。

如果你想知道为什么这个人做出了某个选择，但这并不影响代码是否应该投入生产，那就清楚地说出来。 

如果您确信代码需要在准备好投入生产之前进行修复，请明确说明。

专业提示：当我们写作时，我们经常认为我们的意图很明确。毕竟，我们知道我们想说什么。值得记住的是，读者可能并不总是清楚我们的写作，因此请确保您最基本的指导是明确的。

### 第五，不要忘记代码反馈——以及所有反馈——包括表扬。

不用说，进行代码审查的主要好处是使代码更好，并解决问题。

但这只是其中的一半。另一方面，代码审查提供了一个很好的机会来表达感谢和欣赏同事的工作。

如果有人编写了特别优雅或可维护的代码，或者对使用库做出了重大决定，请告诉他们！ 

在 Sema，我们认为给出积极、具体的反馈总是正确的时机。当然，在代码审查方面，我们也会说话。

## ‍工程团队应该如何支持有效的代码审查？

### 代码审查和心理安全

争议、冲突和不同意见都是代码审查过程的重要组成部分。因为代码审查是基于信任的，所以心理安全是一个关键组成部分。

什么是心理安全？

心理安全是指同事感到安全和信任，知道有犯错的余地并且可以分享坏消息，并且通常对组织支持你充满信心。谷歌和其他地方的研究表明，心理安全是团队成功的最重要因素之一。 

这是有道理的——如果你一直担心是否有人要抓你，你将投入大量时间和情感能量来保护自己，而不是创造。而且你会提出更少的想法，或者承担更少的风险，这可以推动团队的发展。

您在组织和团队中为提高心理安全所做的一切工作也适用于代码审查：

减少交付需要修复的代码的负面影响。我们不能说“消除”负面后果；毕竟，团队来这里是为了构建满足要求的优秀代码。但是，将成本审查定为教学时刻，而不是判断时刻，就可以了 
定期询问团队，尤其是初级开发人员和其他可能担心自己地位低下的人，以了解代码审查给他们的感受。
定期审查所有审查员-编码员配对的代码审查样本，以根据他们的语气和结论寻找积极或令人担忧的趋势。
向可能需要更多培训和支持以创建保护心理安全的代码审查的同事提供培训和支持，而不是判断。
最后，我们建议应该要求在代码审查和其他地方不断违反心理安全的人离开团队。我们认为，没有任何一位程序员或同事比确保每个人都感到能够做到最好的工作更重要。
‍

### 清晰的流程

确保代码审查的过程是清晰的、清晰的、编纂的、教导的、遵循的和强化的。 

尤其是在团队分散的情况下，将代码审查过程的基础知识“备忘单”轻松提供可能会有所帮助——例如，固定到开发 Slack 频道。

最重要的是，组织应该清楚何时应该进行代码审查以及应该由谁来做——见下文。


### 快速周转

代码审查是一项应始终认真对待的责任 - 并优先考虑。某人的首要任务总是在编写自己的代码之前审查其他人的代码。 

这样做的原因是，畅通其他人的工作会使团队中的其他人更有效率。如果您正在处理您的代码，而不是审查别人的代码，那么它就会成为一个障碍。如果您查看他们的代码，然后编写自己的代码，那么您正在释放团队的潜力。记住——这是一门手艺，不是比赛！

‍
### 代码审查的有意和结构化方法

对此没有“一刀切”的答案。它因代码库、组织规模和团队偏好而异。 

当一家公司刚起步时，代码审查应该看起来与快速增长或产品成熟期间不同。

这是为您的团队和开发阶段解决问题的快速指南： 

如果一个产品刚刚开始构建，在最早的阶段，例如在黑客马拉松或最简单的最小可行产品期间，那么代码审查是没有必要的。在这个阶段，他们只会碍事。团队应该弄清楚应该创建什么功能并尽力而为。
在那个阶段之后，代码审查的重要性增加了。早期的公司可能希望在团队中挑选一个人来进行所有的代码审查。这具有简单和快速的好处，但以共享和多样化的学习体验为代价。
随着公司的发展，应该有更多的人进行代码审查。根据经验，所有高级工程师都应该在公司处于快速增长阶段时进行代码审查。在这个阶段，我们假设速度仍然是必不可少的。
随着公司的成熟，随着能力的增加，代码审查应该由高级和中级工程师进行。
最后，随着代码库的成熟，随着团队能力的增强，包括初级工程师在内的所有工程师都应该参与到代码审查过程中。请注意，低年级学生不仅需要培训，而且他们的评论也可能需要由更有经验的人进行第二次评估。在这里，代码审查的一个主要目标是作为初级工程师的教学工具。
‍

### 清晰的编码标准，随手可得 

接下来，如果您的组织有关于编码指南或特定于您的代码内容的文档，请确保代码审查人员可以随时使用和访问，这样他们就不必到处搜索要包含的内容。请参阅下面对 linter 的讨论。

‍
### 给予代码审查重力

确保代码审查工作与编码一样有价值——这两项活动应该具有相同的权重和可见性。 

有很多方法可以做到这一点：从庆祝完成大量代码审查的工程师，到在非正式签到时讨论代码审查，再到将代码审查的贡献纳入年度绩效流程的一部分。 

如果基于认可、奖励和其他后果，代码审查并不重要，那么纸上说什么也没关系。

您是否有一个“伟大的开发人员”拒绝进行代码审查或拒绝根据他人的反馈采取行动？他们会发生什么？这是向组织的其他成员发出的关于代码审查实际上有多么重要的最明确的信号之一。

## ‍编码人员如何帮助进行代码审查？

代码作者在有效的代码审查中扮演着重要的角色。

‍
## 保持较小的拉取请求

尽量保持拉取请求尽可能小。当一个拉取请求需要超过三个评论时——尤其是当它达到五个时——通常表明拉取请求很可能应该被分解成更小的拉取请求。 

‍
## 对反馈持开放态度

请记住，提供反馈和接收反馈一样有压力。编码是一门手艺，很难指出可以改进其他人的辛勤工作的方法。 

如果您对收到的反馈感到沮丧，请在回复之前暂停一下——也许把它放在一边去散步/睡觉，然后第二天再回来。分享的反馈是否有道理？ 

你对反馈越开放和欣赏，你从别人那里得到的想法就越多，你就会成长得越多。

## 快速响应——如果可以的话

如果您对评论有负面情绪反应，最好离开。正如 Oasis 如此雄辩地唱的那样，不要在愤怒中回写代码审查……或者至少我们是这么记得的。

如果您没有负面反应，请尽快处理审核 - 回答问题，进行更改，提出后续问题。

上下文切换是编码流程的杀手。目标是最大程度地减少您和审阅者考虑此审阅与其他编码工作的时间。如果您可以在审阅者完成后立即回复审阅，那么您就可以避免以后的脑力劳动，因为你们俩都必须恢复速度。

## 切换到同步通信以进行任何跟进

代码审查通常是异步的，可以在数千英里之外完成。

在过去，当恐龙不断地用那些真的不那么有趣的笑话来消耗复印机的碳粉时，编码员可以走到他们的办公桌前向他们提问或向同事提问。

现在我们有许多其他工具，这些工具在当时很有帮助。 

现在是第六条也是最后一条代码审查黄金法则的时候了（你不认为我们会忘记，是吗？如果代码作者对代码审查有后续问题，请实时同步进行，而不是异步进行. 拿起电话，开始挤成一团，走过去。

原因是上下文切换。至此，代码上会出现三个集中注意力的时刻：

1-作者写作

2- 审稿人审阅

3-作者内部化审查

自动询问有关审查的澄清问题意味着将有第四个时刻：

4-审稿人回应。

此处同步通信的目标是避免需要第五、第六、第七等时刻的注意。


## 组织的其他部门（如产品和销售部门）如何帮助提高代码审查的效率？ 

### 相信过程

家里有76人球迷吗？你好，我们见！

立即添加一个功能，或者在下班前将一段代码推送到生产环境，这会让人感到非常紧迫。我们明白了。

但是跳过代码审查这一步几乎总是让事情变得更糟——有时，不是那么晚。

相信我们：没有比下一个版本中更完整的代码版本更让用户满意的了。

‍

### 保护审查时间 

组织的其他成员可以做的最重要的事情是了解代码审查是编码的一部分，并且应该在 sprint 计划和其他类型的工作估计中留出时间。

如上所述，代码审查的“投资回报率”非常高，因此组织需要保护这段时间。 

估计和计划工程活动的组织应该包括 10% 到 50% 的缓冲区用于代码编写之外的代码审查，具体取决于正在编写的代码的复杂性、编码人员的技能水平和审查人员的技能水平。 

‍

### 巩固其重要性

上述关于正式认可和/或“后果管理”的观点对于组织的其他成员和工程团队一样适用。

如果 CEO 庆祝功能完成，那么 CEO 是否也会庆祝代码质量、开发人员指导和代码审查？年度绩效流程是否也反映了审查？

请记住，一盎司的预防胜过一磅的治疗。通过庆祝和认可尽早投资于代码审查意味着避免以后出现更昂贵的结果，例如技术债务和开发人员流失。

## ‍代码审查如何与其他想法、部门、主题互动

### 代码审查和 QA 之间有什么关系？

QA 团队进行审查以确保满足编码要求，特别是对用户可见的要求。这可能包括视觉组件、功能或性能。

相比之下，代码审查视图着眼于代码的固有或潜在质量，以确保它对于业务阶段而言是足够且适当的质量。 

在 Sema，我们的核心信念之一是，正确的代码质量水平会根据产品的阶段和组织的阶段而有所不同——这对于 QA 和代码审查都是如此。

代码审查和 QA 投资应该以大致相同的速度增长。

如果您正在构建最小可行产品或黑客马拉松项目，则 QA 可以由 Coder 或团队中的其他人完成，并且可以跳过代码审查。

随着产品的成熟，我们建议添加一些专门的 QA 和其他人的代码审查。

成熟的产品应该有非常强大的 QA 团队和流程，以及非常强大的代码审查流程。

‍

### 代码审查和 linter 呢？

Linter 是自动检查代码的软件，通常是在行级别，以解决对代码异味类别下的可读性、代码性能或其他次优实践的担忧。 

如果您的团队找到了适合您项目的风格指南/最佳实践的 linter，并且您的团队对它们感到满意，请务必使用它们。 

团队越大，lint 就越重要——它使整个团队的沟通变得更加容易。 

然而，Linter 并不是代码审查的替代品。当您使用 linter 时，代码审查可以专注于代码的其他元素——例如框架、算法、数据结构的选择。

‍

### 代码审查和配对编程呢？ 

配对编程是工程团队工具包中非常有用的工具，应在必要时应用。特别是，与初级工程师合作并解决棘手的问题是结对编程的绝佳机会。

确实，配对编程减少了对代码审查的需求，因为已经有两个人而不是一个人在查看代码。

尽管如此，我们仍然认为代码审查应该发生在使用配对编程编写的代码上，因为还有许多其他好处：知识转移，以便第三或第四人理解代码以及为他人教学的时刻。

不要误会我们的意思——我们是配对编程的忠实拥护者！你可以在这里阅读一个很棒的指南。 

‍
### 如何了解更多关于代码审查和相关主题的信息？ 
GitHub 代码审查指南：[https ://github.com/features/code-review](https ://github.com/features/code-review ) 。 

我们最喜欢的更多培训来源之一是Curtis Einsmann 的课程。这是非常值得的。 

最近一篇关于代码审查偏见的重要论文以及减少这种偏见的步骤：[https ://t.co/eyhxiKi7Kk](https ://t.co/eyhxiKi7Kk )

有关心理安全的更多信息，请查看主题专家Amy Edmsonson 教授和作家兼学者Tom Geraghty。 


## 参考链接

[Code Review](https://www.semasoftware.com/blog/code-reviews-101-the-basics)