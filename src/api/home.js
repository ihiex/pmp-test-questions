import http from '@/utils/http'

export function getList() {
    return http({ url: '/find-all', method: 'get' })
}

export function delUser(data) {
    return http.delete('/delete', data)
}

export function getUser(params) {
    return http({ url: '/getUser', method: 'get', params })
}
export function getBaidu() {
    return http({ url: '/dianshiju/guoju/12320.html', method: 'get' })
} 

// https://www.66s.cc/e/search/index.php
export function search(data){
    return http({
        url: '/e/search/index.php',
        method: 'post',
        data: data
    })
}

export function getVedioUrl(){
    return http({
        url: '/e/DownSys/play/?classid=6&id=12320&bf=0&pathid1=0',
        method: 'get'
    })
}