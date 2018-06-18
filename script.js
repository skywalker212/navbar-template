const hideClose = () =>{
    $('#close-nav').css({'display':'none'});
}

const showClose = () =>{
    $('#close-nav').css({'display':'inline'});
}

$('.sidenav').sidenav({
    menuWidth: 250,
    closeOnClick: true,
    draggable:true,
    edge: 'right',
    onOpenEnd: showClose,
    onCloseStart: hideClose
});

$('.sidenav-trigger').click(()=>{
    $('#close-nav').css({'display':'inline'});
});