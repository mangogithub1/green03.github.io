$(function(){
    var $tab_list=$('.tab_menu');
    $tab_list.find('ul ul').hide();
    $tab_list.find('li.active>ul').show();
    $tab_list.find('ul>li>a').click(tabMenu).focus(tabMenu);
    
    function tabMenu(e){
        e.preventDefault();
        var $this=$(this);
        $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
    }
});