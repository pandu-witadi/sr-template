//
//

module.exports = {
    async fn() {
        await sails.helpers.utils.logApi(this.req.isSocket, `GET /api/test : test/server-check`)

        let curDate = new Date()
        return {
            isSuccess: true,
            payload: {
                serverDate: curDate.getFullYear() + "-" + (curDate.getMonth() + 1) + "-" + curDate.getDate(),
                serverTime: curDate.toLocaleTimeString(),
                random: Math.random()
            }
        }
    }
}
