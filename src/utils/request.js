
//请求封装
async function request (url, {method = 'GET', params = {}, headers = null, loading = false}){
	const defaultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };
    
	//没有url，直接报错
	if ( !url.trim() ) {
		console.log('请求地址不能为空!')
		return;
    }
    
    // if(loading) Toast.loading('加载中...', 10)
    const newHeaders = {...defaultHeaders, ...headers}
    let newParam = null;
    if (method === 'GET' || method === 'get') newParam = null;
    else newParam = JSON.stringify(params);

	//请求头
	// header.token = getToken();
	//返回promise
	return new Promise((resolve, reject)=>{
		fetch(url, {
		    method: method,
			body: newParam,
			headers: newHeaders,
		}).then(res => res.json())
		    .then(response => {
				resolve(response);
				// Toast.hide()
		    })
		    .catch(err => {
				console.log('err', err)
				reject(err);
				// Toast.hide()
		    });
	})
}

export default request;