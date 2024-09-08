const base = {
    get() {
        return {
            url : "http://localhost:8080/collegeCompetitionManage/",
            name: "collegeCompetitionManage",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/collegeCompetitionManage/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校学科竞赛平台"
        } 
    }
}
export default base
