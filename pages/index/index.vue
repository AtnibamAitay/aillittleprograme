<template>
	<view class="container">
		<image class="bg-img" src="https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/background.png"></image>
		<view class="content">
			<view class="C_word">模式识别与人工智能实验室</view></br>
			<view class="E_word"> Pattern Recognition and artificial intelligence Laboratory</view>
			<view class="A_title ">
				<text class="cuIcon-titles text-purple"></text>
				<text>关于我们的实验室</text>
			</view>
			<view class="M_body">模式识别与人工智能实验室创立于2019年1月，是专注于<text class=" WB_zt"
					style="border-bottom: 3px solid #6000AC;padding-bottom: 0px;">人工智能、计算机视觉、深度学习、软件开发</text>等方向研究的创新型实验室，以项目开发、学术科研为主导，强化成员兴趣、锻炼学生创新、发现及实际动手开发研究的能力。实验室还承担了多项重大的科研项目，包括国家重点研发计划的大学生创新创业训练计划项目，攀登计划等。实验室成员<text
					class="WB_zt"
					style="border-bottom: 3px solid #6000AC;padding-bottom: 0px;">多次获得本科生国家奖学金、各类竞赛的国家级奖项、省级奖项等</text>。还涌现出了不少优秀的创业团队，比如小铁匠教育（广州）科技有限公司，2020年营业额280多万元。
			</view>

		</view>
		<view class="app1" style="background-color: #6000AC; margin-top: 30px;margin-bottom: 30px;">
			<view class="XQ_title">
				<text class="cuIcon-titles text-white"></text>
				<text>和我们一起</text>
			</view>
			<view class="app2" style="width: 90px;height: 20px;border-radius: 50px; background-color: #333333;">
				<view class="FX_title">开发方向</view>
			</view>
			<view class="KF_fx">人工智能、前端开发、后端开发</view>
			<view class="KF_fx">嵌入式开发、数据库开发</view>
			<view class="app2" style="width: 90px;height: 20px;border-radius: 50px; background-color: #333333;">
				<view class="FX_title ">招新需求</view>
			</view>
			<view class="ZX_xq"> 本次招新主要面向信息技术与工程学院、现代信息产业学院20级和21级的学生，大一新生或其他学院的同学，有兴趣有学习能力者也可以报名尝试。
				<view>报名后，每个方向将会有实验室成员带路和指导一段时间进行学习、项目申报与项目开发，预计为期一个半月左右，最终考核形式待群内通知。</view>
				<view>【实验室的位置】20栋创客空间内106——模式识别与人工智能实验室</view>
				<view>【报名截止时间】2022/10/05 22点</view>
				<view>【招新开会时间】2022/10/08 20点</view>
			</view>

			<view class="app2" style="width: 90px;height: 20px;border-radius: 50px; background-color: #333333;">
				<view class="FX_title">合作招募</view>
			</view>

			<view class="ZX_xq">项目合作伙伴面向艺术设计学院20级和21级学生招募软件视觉设计师，其他学院有能力者也可以报名尝试。</view>
			<view class="ZX_xq">此招新非实验室成员招新，而是我们希望能够面向艺术设计学院找到固定的项目开发合作伙伴，负责软件视觉设计（UI设计、原型图设计等）。</view>
			<view class="text-center">
				<image class="BMEWM_img " src="https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/8.png"
					show-menu-by-longpress="true" @click="clickImg"></image>
			</view>

			<view class="app" style="padding-bottom: 10px;">
				<view class="SM_title">报名加入，和我们一起<br /></view>
				<view class="BM_title">（单击二维码即可放大，再长按即可扫描）</view>
				<view class="BM_title">（报名后请扫二维码入群，相关通知将在群内发布）</view>
			</view>

		</view>
		<view class="SY_ds">
			<text class="cuIcon-titles text-purple"></text>
			<text>实验室的导师们</text>
		</view>
		<scroll-view scroll-x class=" nav text-center" style="width: 98%;">

			<view class="cu-item" v-for="(item,index) in teacherName" :class="index==TabCur?'text-purple cur':''"
				:key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
			<view>
				<view v-if="teacherContentId == 0">
					<image class="XS-img" src="https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/5.png"></image>
					<view class="XS_th">
						何选森，主要研究方向为信号与信息处理。曾任国防科技大学信息工程研究所工程师、高级工程师，长沙交通学院(现为长沙理工大学)计算机工程系副教授，湖南大学计算机与通信学院(现为信息科学与工程学院)副教授兼研究生导师。承接国家、省级、市级纵向科学研究项目，以及承担横向科技开发项目。主持包括《新一代微型计算机体系结构及产品研究》、《视频流点播与广播系统》、《数字视频语义对象篡改的被动取证研究》在内的、或参与的科研项目17余项，以第一作者的身份在国际学术会议上发表的论文6篇、以第一作者的身份发表的学术期刊论文26篇。出版著作、教材有本科生教材《随机过程》、研究生教育创新工程教材《随机过程与排队论》。项目《新型数据压缩软件WHH》获国防科工委(现为总装备部)科技进步二等奖一项，项目排名第一；项目《攻防体系对抗中C3I系统对抗的建模与仿真实现》获军队级科技进步三等奖一项，项目排名第一。
					</view>
				</view>
				<view v-if="teacherContentId == 1">
					<image class="XS-img" src="https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/6.png"></image>
					<view class="XS_th">
						黄世奇，博士，主要研究方向为信息获取与智能处理，模式识别，人工智能，遥感大数据处理与应用，动态监测与变化信息解译等。曾在中国人民解放军96323部队、火箭军工程大学和西安邮电大学工作，学术论文共计发表170余篇，其中SCI收录30多篇，EI收录70多篇；出版学术专著3部，副主编丛书3部。授权国防发明专利2项，授权国家发明专利9项，受理国家发明专利6项。主持项目15项，包括国家自然科学基金面上项目、陕西省自然科学基金重点项目和面上项目、中国博士后基金特别资助项目和面上项目、陕西省教育厅专项项目、陕西省教育厅专项项目以及校级特区人才支持项目、军内项目和横向项目。获各种奖励30余项，其中包括省部级科技进步奖二等奖3项，陕西省教育厅科技奖二等奖1项。多次评为优秀工作者和教师，获全国“百篇”优秀博士论文提名和全军优秀博士论文，荣立三等功1次，多次受嘉奖，获陕西省第九届青年科技奖荣誉称号。
					</view>
				</view>
				<view v-if="teacherContentId == 2">
					<image class="XS-img" src="https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/4.png"></image>
					<view class="XS_th">
						陈其龙，2009年获得大连理工大学信息与计算科学专业学士学位，2015年获得中山大学计算机科学技术专业硕士学位。2014年参加学习cocos2d-x游戏开发，指导学生参加Java程序设计以及网页设计竞赛，在《电脑知识与技术》杂志上发表关于Android教学和开发论文两篇，《代码克隆检测技术的android应用重打包检测》和《高职软件技术专业android项目化开发教学探究》，指导学生参加“蓝桥杯“比赛，获得省一等奖，全国三等奖。
					</view>
				</view>
				<view v-if="teacherContentId == 3">
					<image class="XS-img" src="https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/3.png"></image>
					<view class="XS_th">
						陈必东，主要研究方向为智能控制工程算法。拥有多年世界500强企业工作经验和多年人工智能识别算法、大数据、云端服务器架构设计、嵌入式了软硬件开发实战、机器学习应用开发实战经验；精通C/C++/Java/python等多门计算机语言；精通Tensorflow、pytorch、caffe等深度学习框架；精通各种数据分析、图像分析算法。获得优秀研究生代表、优秀科研创新先进个人、全国算法设计大赛一等奖、中国创业投融资大赛一等奖、优秀“三好研究生、优秀硕士研究生、优秀硕士毕业论文、创新发明竞赛一等奖、优秀企业项目经理、国家基金项目、国家软件竞赛、个人发明专利数60+、参与发明专利个数70+和发表学术论文3+等。
					</view>
				</view>
				<view v-if="teacherContentId == 4">
					<image class="XS-img" src="https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/7.png"></image>
					<view class="XS_th">
						于海澜，主要研究方向为计算机视觉、数字图像处理和机器学习。2018年9月，2017-2018学年荣获康大教育园园区“教学优秀奖”。2019年6月，广东省大学生计算机作品赛，指导赖萍和钟碧莹等学生设计的作品“智能快递柜的设计与实现”，获得三等奖。2019年6月，申报广州商学院优秀课程建设项目“概率论与数理统计”。2019年11月，申报广州商学院校级科研项目“基于弱监督的深度学习在计算机视觉中的应用”。2020年7月，广州商学院2019-2020学年度，学期考核被评为“优秀”。2020年9月，广东省大学生计算机作品赛，指导范康琦和黄莺婵等学生设计的作品“智能垃圾分类系统设计与实现”，获得二等奖。
					</view>
				</view>
			</view>

		</scroll-view>


		<view class="SY_ds">
			<text class="cuIcon-titles text-purple"></text>
			<text>我们的成果</text>
		</view>
		<view class="text-center">
			<image class="B_img" src="https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/table.png"></image>
		</view>
		<view class="SY_ds">
			<text class="cuIcon-titles text-purple"></text>
			<text>实验室的建设</text>
		</view>
		<view class="app2" style="width: 90px;height: 20px;border-radius: 50px; background-color: #333333;">
			<view class="FX_title">学生培养</view>
		</view>
		<view class="XS_xx">1、学习与开发</view>
		<view class="XS_py"> 实验室成员指导新人进行学习和项目开发，使得新成员可以走的更快，方向更明确。在具备项目开发能力后，新成员能够获得丰富的项目实践机会，并从中获得项目经验与阅历。</view>
		<view class="XS_xx">2、本科生培养</view>
		<view class="XS_py">
			实验室本着培养本科生在学期间的学习能力、科研能力、实践能力和参与学术活动能力等方面的培养目的，进行了学生的因材施教制度。根据各个学生的能力，进行合理化的合作方式，为所有学生提供了良好的培养条件，让学生们拥有更大的创新和发展空间。
		</view>
		<view class="XS_xx">3、例会与研讨会</view>
		<view class="XS_py">
			研讨会是实验室成立起就开始进行的一个由实验室全体师生参与的，就学术问题、项目开发问题等进行研究、探讨和交流的活动，以演讲的形式就自己近期的学习、工作和研究内容向大家做报告，与此同时，教师会给予自己的意见，提供适当的建议，为自身的发展提供方向。
		</view>
		<view class="XS_xx">4、多实验室联合项目开发</view>
		<view class="XS_py"> 实验室一直与其他实验室保持着多层次、多方面的项目合作和交流，并积极拓展合作和交流渠道，建立了良好的交流环境。</view>
		<view class="XS_py"> 实验室与创新实验室、鸿蒙研究院共同成立了“基于UAV-ROS的水果识别采摘系统”项目，实验室的吴才朋、黄龙坤、刘伟锋等多位同学通过该项目与其他实验室的成员共同进行项目开发。
		</view>
		
		<view class="text-center">
			<image class="HZ_img" src="https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/photos.jpg"></image>
		</view>
		
		<view class="app2" style="width: 90px;height: 20px;border-radius: 50px; background-color: #333333;">
			<view class="FX_title">环境建设</view>
		</view>
		<view class="HJ_js1"> 实验室面积约100平方米，设备固定资产30余万，另配多台
			<text style="border-bottom: 3px solid #6000AC;padding-bottom: 0px;">高性能服务器，CPU工作站、机械臂、超声波探伤仪</text>等配备，提供
			<text style="border-bottom: 3px solid #6000AC;padding-bottom: 0px;">打印机、空调、高配置电脑、饮水机、投影仪</text>等基础设备。
		</view>
		<view class="HJ_js2"> 实验室 <text
				style="border-bottom: 3px solid #6000AC;padding-bottom: 0px;">安静、舒适</text>的环境以及实验室成员努力营造的 <text
				style="border-bottom: 3px solid #6000AC;padding-bottom: 0px;">学习氛围</text>为本科生提供了良好的学习环境，也为保障大家更高效率的学习和工作起到了有益的促进作用。
		</view>
		<view class="SY_ds">
			<text class="cuIcon-titles text-purple"></text>
			<text>我们正在做的事</text>
		</view>
		<view class="XS_xx">1、项目（横向课题）</view>
		<view class="ZZ_zs">·人工智能</view>
		<view class="ZZ_zs">·嵌入式应用</view>
		<view class="ZZ_zs">·移动端、小程序、网页、桌面端应用开发与运营</view>
		<view class="XS_xx">2、科研</view>
		<view class="XS_xx">3、比赛</view>
		<view class="ZZ_zs">·攀登计划</view>
		<view class="ZZ_zs">·“挑战杯”中国大学生创业计划竞赛</view>
		<view class="ZZ_zs">·“挑战杯”全国大学生课外学术科技作品竞赛</view>
		<view class="ZZ_zs">·中国“互联网+”大学生创新创业大赛</view>
		<view class="ZZ_zs">·赢在广州</view>
		<view class="ZZ_zs">·大学生创新创业训练计划项目</view>
		<view class="ZZ_zs">·中国计算机大赛</view>
		<view class="ZZ_zs">·微信小程序应用开发赛</view>
		<view class="ZZ_zs">·中国高校计算机大赛移动应用创新赛</view>
		<view class="ZZ_zs">·中国大学生服务外包创新创业大赛</view>
		<view class="ZZ_zs">·等等</view>
		<view class="ZH_my">(｀・ω・´) 再往下啥也没有了</view>
	</view>

</template>
<script src="../base/jquery-3.4.1.min.js"></script>

<script>
	export default {
		components: {},
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				teacherName: ['何选森', '黄世奇', '陈其龙', '陈必东', '于海澜'],
				teacherContentId: 0
			};
		},
		onLoad() {

		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				//改变内容
				// console.log(e)
				this.teacherContentId = e.currentTarget.dataset.id
			},

			clickImg() {
				wx.previewImage({
					urls: [
					"https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/8.png"], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
					current: '', // 当前显示图片的http链接，默认是第一个
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
			},

		},


	}
</script>

<style lang="scss">
	@import url("../../colorui/main.css");
	@import url("../../colorui/icon.css");

	@font-face {
		font-family: "heiti";
		src: url("https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/simhei.ttf");
	}

	@font-face {
		font-family: "ysbth";
		src: url("https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/YouSheBiaoTiHei.woff2");
	}

	.bg-img {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.content {
		margin-top: 30px;
		margin-left: 15px;
		margin-right: 15px;

	}

	// @media(max-width:1024px){
	// 	bg-img{
	// 		background: purple;
	// 	}
	// }

	.C_word {
		font-size: 45rpx;
		font-family: ysbth;
		margin-top: 67px;

	}

	.E_word {
		font-size: 22rpx;
		font-family: ysbth;
		margin-top: 1px;
		word-spacing: -3px;
	}

	.A_title {
		font-size: 35rpx;
		font-family: ysbth;
		margin-top: 30px;
	}

	.WB_zt {
		border-bottom: 5px solid #6000AC;
	}

	.M_body {
		text-indent: 2em;
		font-size: 29rpx;
		font-family: heiti;
		margin-top: 10px;
		line-height: 50rpx;
		text-align: left;
	}

	.SM_title {
		font-size: 40rpx;
		font-family: ysbth;
		color: #FFFFFF;
		line-height: 65rpx;
		margin-top: 5px;
		justify-content: center;
		text-align: center;
	}

	.BM_title {
		font-size: 27rpx;
		font-family: ysbth;
		color: #FFFFFF;
		text-align: center;
		justify-content: center;
		line-height: 40rpx;
	}

	.page {
		position: inherit;
		width: 100%;
		height: 100%;
	}

	.M_img {
		width: 150px;
		height: 150px;
		text-align: left;
		margin-top: 10px;
	}

	.Z_img {
		width: 150px;
		height: 150px;
		margin-left: 40px;
	}

	.B_title {
		font-size: 35rpx;
		font-family: ysbth;
		margin-left: 15px;
		color: #FFFFFF;
	}

	.app {
		justify-content: center;
		text-align: center;
		margin-left: -8px;
	}

	.XQ_title {
		font-size: 35rpx;
		font-family: ysbth;
		color: #FFFFFF;
		margin-left: 15px;
		line-height: 70rpx;
	}

	.app2 {
		justify-content: center;
		text-align: center;
		margin-top: 3px;
		margin-left: 40%;

	}

	.app3 {
		justify-content: center;

		text-align: center;
		margin-top: 9px;
		// margin-left: 40%;
		height: 40rpx;
	}

	.app4 {
		text-align: center;
		justify-content: center;
		margin-top: 9px;
		margin-left: 30%;

	}

	.FX_title {
		font-size: 30rpx;
		font-family: ysbth;
		color: #FFFFFF;
		line-height: 40rpx;
		margin-top: 10px;
		text-align: center;
	}

	.FX_title1 {
		font-size: 30rpx;
		font-family: ysbth;
		color: #FFFFFF;
		line-height: 40rpx;
		text-align: left;
	}

	.KF_fx {
		font-size: 30rpx;
		font-family: heiti;
		color: #FFFFFF;
		line-height: 40rpx;
		text-align: center;
		margin-top: 10px;
	}

	.ZX_xq {
		margin-top: 10px;
		font-size: 30rpx;
		font-family: heiti;
		color: #FFFFFF;
		line-height: 50rpx;
		text-indent: 2em;
		margin-left: 15px;
		margin-right: 15px;

	}

	.ZX_xq1 {
		margin-top: 10px;
		font-size: 30rpx;
		font-family: heiti;
		color: #FFFFFF;
		line-height: 50rpx;
		text-indent: 2em;
		margin-left: 15px;


	}

	.SY_ds {
		font-size: 35rpx;
		font-family: ysbth;
		margin-top: 30px;
		margin-left: 15px;
		margin-right: 15px;
	}

	.CG_y {
		background-color: #6000AC;

	}

	.SJ_h {
		font-size: 8px;
		width: 10px;

	}

	.XS_py {
		text-indent: 2em;
		font-size: 29rpx;
		font-family: heiti;
		margin-top: 10px;
		line-height: 50rpx;
		margin-left: 15px;
		margin-right: 15px;
	}

	.XS_xx {
		font-size: 29rpx;
		font-family: heiti;
		margin-top: 10px;
		line-height: 32rpx;
		margin-left: 15px;
		margin-right: 15px;
	}

	.HZ_img {
		width: 90%;
		height: 165px;
		margin-top: 10px;
		// margin-left: 15px;
		// margin-right: 15px;
	}

	.BMEWM_img {
		width: 330px;
		height: 150px;
		object-fit: contain;
		justify-content: center;
		// width: 90%;
		// height: auto;
		// margin-top: 10px;
		// margin-left: 15px;
		// margin-right: 15px;
	}

	.HJ_js1 {
		text-indent: 2em;
		font-size: 29rpx;
		font-family: heiti;
		margin-top: 10px;
		line-height: 50rpx;
		margin-left: 15px;
		margin-right: 15px;
	}

	.HJ_js2 {
		text-indent: 2em;
		font-size: 29rpx;
		font-family: heiti;
		line-height: 50rpx;
		margin-left: 15px;
		margin-right: 15px;
	}

	.ZZ_zs {
		text-indent: 1em;
		font-size: 28rpx;
		font-family: heiti;
		color: #7A7A7A;
		line-height: 35rpx;
		margin-top: 10px;
		margin-left: 15px;
		margin-right: 15px;
	}

	.ZH_my {
		font-size: 21rpx;
		font-family: heiti;
		color: #333333;
		text-align: center;
		padding: 30px;
	}

	.B_img {
		height: 600px;
		width: 340px;
		// margin-left: 15px;
		margin-top: 10px;
	}

	.cu-item {
		font-family: heiti;
	}

	.XS_th {
		text-align: left;
		font-size: 29rpx;
		font-family: heiti;
		color: #393939;
		line-height: 50rpx;
		margin-top: 10px;
		margin-left: 15px;
		margin-right: 0px;
		white-space: pre-wrap;
	}

	.XS-img {
		border-radius: 100%;
		height: 85px;
		width: 85px;
		margin-top: 16px;
		border: 3px solid #6000AC;
	}
</style>
