/**
 * Created by ym on 2017/6/21.
 */

function antiBaidu(document) {
    let pageFoot = document.querySelector('#banner_call');
    if ( pageFoot ) {
        let adEl = pageFoot.nextElementSibling;
        if( adEl && /^[a-zA-Z]{3}[0-9]{2}$/.test(adEl.id)){
            adEl.style.display = 'none';
        }
    }
    document.querySelectorAll('.ec_wise_ad').forEach( item => {
        item.style.display = 'none';
    });
    document.querySelectorAll('.ec_wise_asyn').forEach( item => {
        item.style.display = 'none';
    });
}

export default antiBaidu