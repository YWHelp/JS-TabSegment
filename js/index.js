/**
 * Created by changcai on 17/4/24.
 */

function  $(id){
    // 类型的比较
    return typeof id === 'string' ? document.getElementById(id): id;
}

//当页面加载完毕时调用
window.onload =  function() {
    //获取标题中所有的li标签,存放于数组中
    var lis = $('tab-header').getElementsByTagName('li');
    //获取主要内容所有的文本列表,存放于数组中
    var contents = $('tab-content').getElementsByClassName('sub-content');
    console.log(lis, contents);
    if(lis.length != contents.length){
        alert('文本内容解析错误');
        return;
    }
    // 遍历
    for (var i=0;i < lis.length;i++){
        //取出li标签
        var li = lis[i];
        //给每个li标签设置id用来区分
        li.id = i;
        // 监听鼠标在li上面的移动
        li.onmousemove = function(){

            for (var j=0;j< lis.length;j++){
                //让所有的li标签都不被选中
                lis[j].className = '';
                contents[j].style.display = 'none';
            }
            this.className = 'selected';
            contents[this.id].style.display = 'block';

        }
    }

}