const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:9000' : '';

export async function findManyProduct(categoryId = '', search = '',startPrice='',endPrice='',sortBy='',sort='') {
    categoryId = categoryId || ''
    search = search || ''
    startPrice = startPrice || ''
    endPrice = endPrice || ''
    sortBy = sortBy || ''
    sort = sort || ''

    const url = `${API_URL}/api/product?categoryId=${categoryId}&search=${search}&startPrice=${startPrice}&endPrice=${endPrice}&sortBy=${sortBy}&sort=${sort}`
    const method = 'GET'
    const res = await fetch(url, { method: method })
    const body = await res.json()
    return body
}

export async function findOneProduct(id) { 
    const url = `${API_URL}/api/product/${id}`
    const method = 'GET'

    const res = await fetch(url, { method: method })
    const body = await res.json()
    return body
}

export async function createProduct(data) { 
    const url = `${API_URL}/api/product/`
    const method = 'POST'
    const res = await fetch(url, { 
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        } 
    })
    const body = await res.json()
    return body
}

export async function updateProduct(id,data) { 
    const url = `${API_URL}/api/product/${id}`
    const method = 'PUT'
    const res = await fetch(url, { 
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        } 
    })
    const body = await res.json()
    return body
}

export async function deleteProduct(id) { 
    const url = `${API_URL}/api/product/${id}`
    const method = 'DELETE'
    const res = await fetch(url, { method: method })
    const body = await res.json()
    return body
}

export async function getCategories (){
    const url = `${API_URL}/api/category`
    const method = 'GET'
    const res = await fetch(url, {
        method: method
    })
    const body = await res.json()
    return body
}

export async function uploadApi(data) {
    const url = `${API_URL}/upload`
    const method= 'POST'
    const res = await fetch(url, { 
        method: method,
        body: data,
        redirect: 'follow'
    })
    const body = await res.json()
    return body
}


export async function SignIn( data ){ // đây là function để bắn api đăng nhap ( du lieu gui len la email va password )
    let url = `${API_URL}/api/auth/sign-in`;
    let method = 'POST'
    let requestBody = JSON.stringify(data)

    let res = await fetch(url, { 
        method: method,
        body: requestBody,
        headers: {"Content-Type": "application/json" }
    })
    let body = await res.json()
    return body;
}
export async function SignUpUser(dataRequest){
    let url = `${API_URL}/api/auth/sign-up`;
    let method = 'POST';
    let requestBody = JSON.stringify(dataRequest)

    let res = await fetch(url, { 
        method: method,
        body: requestBody,
        headers: {"Content-Type": "application/json"}  
    });

    let body = await res.json();
    if(body.message){
        throw new Error(body.message)
    } else {
        return body;
    }

    
}
export async function SignUpAdmin(){
    let url = `${API_URL}/api/auth/sign-up-admin`;
    let method = 'POST';

    let res = await fetch(url, { method: method });
    let body = await res.json();
    return body;
}

