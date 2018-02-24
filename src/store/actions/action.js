
export function getData() {
    return dispatch => {
        fetch('https://www.giantbomb.com/api/games/?api_key=242d742c4801a3e7c3b71c68654a6b829e39d87b&format=json&filter=original_release_date:2017-02-17|2018-02-17&field_list=name,image,original_release_date,site_detail_url')
            .then((data) => {

                // console.log(data)
                data.json()
                    .then((userData) => {

                        dispatch({
                            type: "DATA",
                            payload: userData
                        })
                    })
            })
    }
}