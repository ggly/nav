let website = localStorage.getItem('website')
let websiteObject = JSON.parse(website)
let hashMap = websiteObject || [
    {logo:'B',url: 'https://www.baidu.com'}
]
console.log(hashMap)
const $siteList = $('.siteList')
const $addli = $siteList.find('li.addli')
function simplifyUrl(url){
    return url.replace('https://','').replace('http://','').replace('www.','').replace(/\/.*/,'')
}
let render = ()=>{
    $siteList.find('li:not(.addli)').remove()
    hashMap.forEach((node,index)=>{
       let $li = $(`<li>
            <div class="site">
                <div class="logo">${node.logo}</div>
                <div class="link">${simplifyUrl(node.url)}</div>
                <div class="del">x</div>
            </div>
    </li>`).insertBefore($addli)
        $li.on('click',()=>{
            window.open(node.url)
        })
        $li.on('click','.del',(e)=>{
            e.stopPropagation()  //阻止冒泡
            hashMap.splice(index,1)
            render()
        })
    })
}
render()
$('.addButton').on('click',()=>{
    let  url = window.prompt('输入要添加的网址')
    if(url.indexOf('http')!=0) {
        url = 'https://' + url
    }
    hashMap.push({logo:simplifyUrl(url)[0].toUpperCase(),url:url})
    render()
})

window.onbeforeunload = ()=>{
    const string = JSON.stringify(hashMap)
    localStorage.setItem('website',string)
}

$(document).on('keypress',(e)=>{
    let k = e.key
    for(let i = 0;i<hashMap.length;i++){
        if(hashMap[i].logo.toLowerCase()===k){
            window.open(hashMap[i].url)
        }
    }
})