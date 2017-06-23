/**
 * Created by ym on 2017/6/21.
 */

function antiAd(document) {

    let antiByClass  = (antiClass)=>{
        document.querySelectorAll('.' + antiClass).forEach( item => {
            item.style.display = 'none';
        });
    };

    let intervalAnti = {
        baidu(){
            antiByClass('ec_wise_ad');
        }
    };

    let initAnti = {
        baidu(){
            let pageFoot = document.querySelector('#banner_call');
            if ( pageFoot ) {
                let adEl = pageFoot.nextElementSibling;
                if( adEl && /^[a-zA-Z]{3}[0-9]{2}$/.test(adEl.id)){
                    adEl.style.display = 'none';
                }
            }
            let indexCard = document.querySelector('#index-card');
            if ( indexCard ){
                for ( let adEl of indexCard.childNodes ){
                    if ( adEl.id && /^[a-zA-Z]{3}[0-9]{2}$/.test(adEl.id)){
                        adEl.style.display = 'none';
                        break;
                    }
                }
            }
            antiByClass('ec_wise_ad');
        }
    };

    let observeListMap = {
        'baidu':[document.querySelector('#results')]
    };

    let domainListMap = {
        'baidu': /^.*baidu.com$/
    };


    let domain = "";
    // init anti
    {
        for ( let key in domainListMap ){
            if (domainListMap[key].test(document.domain))
                domain = key
        }
        initAnti[domain]();

        let MO = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        let observer =  new MO(intervalAnti[domain]);
        observeListMap[domain].forEach(item=>{
            observer.observe(item, { 'childList': true, 'subtree': true})
        })
    }




    

}

export default antiAd