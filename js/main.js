document.addEventListener("EasyNetShopLoaded", function(event) {
    ens_jQuery('.btn-ens-selected-self').click(function() {  
      self_name = ''; self_price = 0; 
      ens_jQuery('#'+ens_jQuery(this).data('div')+' input:checked').each(function(){
        self_name += ' ' + ens_jQuery(this).data('name');
        self_price += ens_jQuery(this).data('price');        
      });
	  easynetshop_self(self_name, self_price);
    });
  }, false);