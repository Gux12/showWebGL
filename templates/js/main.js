var scene3dArray = [];
$(document).ready(function() {
    var pattern = new RegExp("\\\"(.| )+?\\\"", "igm");

    var imgimac = $('#imac');
    src = imgimac.css('background-image');
    if (typeof(src) != "undefined") {
        var img = new Image();
        img.onload = function() {
            imgimac.css('height', img.height * (imgimac.width() / img.width));
            var padding = new Array(38, 38, 253, 38);
            var paddiing_str = "";
            for (item in padding) {
                padding[item] = padding[item] * (imgimac.width() / img.width);
                paddiing_str = paddiing_str + padding[item] + 'px ';
            }
            imgimac.css('padding', paddiing_str);
            $('#carousel').css('height', imgimac.height());
        }
        $(window).resize(function() {
            imgimac.css('height', img.height * (imgimac.width() / img.width));
        });
        var a = pattern.exec(src);
        img.src = eval(a[0]);
    }



    // 这部分是用来在打开和关闭模态框时使用不同的背景图片
    var modal = new Array('#myModal1', '#myModal2', '#myModal3', '#myModal4')
    for (x in modal) {
        $(modal[x]).on('hide.bs.modal', function(e) {
            $('#psycho')[0].src = "/templates/img/image1_u1.gif";
            $('#psycho').load(function(){
                $('#my-options').css('top', $('#psycho')[0].clientHeight - $('#my-options').height());
            });
        })
        $(modal[x]).on('show.bs.modal', function(e) {
            $('#psycho')[0].src = "/templates/img/image1_u3.gif";
            $('#my-options').css('top', $('#psycho')[0].clientHeight - $('#my-options').height());
            // $('#mydesirelabel')[0].innerHTML = '我的需求<span><img src="/templates/img/customer_who/me.png"></span>';
        })
    }


    //我的需求
    $("select").select2({dropdownCssClass: 'dropdown-inverse'});
    $(".btn-confirm-order").click(function() {
        $(this).toggleClass("btn-primary");
        $(this).toggleClass("btn-danger");
        if (this.textContent == "确认订单") {
            this.textContent = "取消订单";
        } else {
            this.textContent = "确认订单";
        }
    })
    $('#microphone a').click(function() {
        for (key3d in scene3dArray) {
            scene3dArray[key3d]();
        }
    })

    //我的供给显示和隐藏
    $('.items-sold').click(function() {
        var cloth = this.dataset.clothType;
        this.href = "home_customer_supply_step2_" + cloth + ".html";
    });


    // $('*').off("scroll");
});
