$(document).ready(function () {
// El cursor entra en el menú
    $('#p1').mouseenter(function(){
        i2.setAttribute("style", `filter:brightness(0.5)`); par2.setAttribute("style", `filter:brightness(0.4)`);
        i3.setAttribute("style", `filter:brightness(0.5)`);par3.setAttribute("style", `filter:brightness(0.4)`);
        i4.setAttribute("style", `filter:brightness(0.5)`);par4.setAttribute("style", `filter:brightness(0.4)`);
        i5.setAttribute("style", `filter:brightness(0.5)`);par5.setAttribute("style", `filter:brightness(0.4)`);
    });

    // El cursor sale del menú
    $('#p1').mouseleave(function(){
       i2.setAttribute("style", `filter:brightness(1)`); par2.setAttribute("style", `filter:brightness(1)`);
       i3.setAttribute("style", `filter:brightness(1)`); par3.setAttribute("style", `filter:brightness(1)`);
       i4.setAttribute("style", `filter:brightness(1)`);par4.setAttribute("style", `filter:brightness(1)`);
       i5.setAttribute("style", `filter:brightness(1)`);par5.setAttribute("style", `filter:brightness(1)`);
    });
    
    
        // El cursor entra en el menú
    $('#p2').mouseenter(function(){
       i1.setAttribute("style", `filter:brightness(0.5)`);par1.setAttribute("style", `filter:brightness(0.4)`);
        i3.setAttribute("style", `filter:brightness(0.5)`);par3.setAttribute("style", `filter:brightness(0.4)`);
        i4.setAttribute("style", `filter:brightness(0.5)`);par4.setAttribute("style", `filter:brightness(0.4)`);
        i5.setAttribute("style", `filter:brightness(0.5)`);par5.setAttribute("style", `filter:brightness(0.4)`);
    });

    // El cursor sale del menú
    $('#p2').mouseleave(function(){
        i1.setAttribute("style", `filter:brightness(1)`);par1.setAttribute("style", `filter:brightness(1)`);
       i3.setAttribute("style", `filter:brightness(1)`);par3.setAttribute("style", `filter:brightness(1)`);
       i4.setAttribute("style", `filter:brightness(1)`);par4.setAttribute("style", `filter:brightness(1)`);
       i5.setAttribute("style", `filter:brightness(1)`);par5.setAttribute("style", `filter:brightness(1)`);
    });
    
    
// El cursor entra en el menú
    $('#p3').mouseenter(function(){
       i2.setAttribute("style", `filter:brightness(0.5)`);par2.setAttribute("style", `filter:brightness(0.4)`);
        i1.setAttribute("style", `filter:brightness(0.5)`);par1.setAttribute("style", `filter:brightness(0.4)`);
        i4.setAttribute("style", `filter:brightness(0.5)`);par4.setAttribute("style", `filter:brightness(0.4)`);
        i5.setAttribute("style", `filter:brightness(0.5)`);par5.setAttribute("style", `filter:brightness(0.4)`);
    });

    // El cursor sale del menú
    $('#p3').mouseleave(function(){
        i2.setAttribute("style", `filter:brightness(1)`);par2.setAttribute("style", `filter:brightness(1)`);
       i1.setAttribute("style", `filter:brightness(1)`);par1.setAttribute("style", `filter:brightness(1)`);
       i4.setAttribute("style", `filter:brightness(1)`);par4.setAttribute("style", `filter:brightness(1)`);
       i5.setAttribute("style", `filter:brightness(1)`);par5.setAttribute("style", `filter:brightness(1)`);
    });
    
    // El cursor entra en el menú
    $('#p4').mouseenter(function(){
       i2.setAttribute("style", `filter:brightness(0.5)`);par2.setAttribute("style", `filter:brightness(0.4)`);
        i3.setAttribute("style", `filter:brightness(0.5)`);par3.setAttribute("style", `filter:brightness(0.4)`);
        i1.setAttribute("style", `filter:brightness(0.5)`);par1.setAttribute("style", `filter:brightness(0.4)`);
        i5.setAttribute("style", `filter:brightness(0.5)`);par5.setAttribute("style", `filter:brightness(0.4)`);
    });

    // El cursor sale del menú
    $('#p4').mouseleave(function(){
         i2.setAttribute("style", `filter:brightness(1)`);par2.setAttribute("style", `filter:brightness(1)`);
       i3.setAttribute("style", `filter:brightness(1)`);par3.setAttribute("style", `filter:brightness(1)`);
       i1.setAttribute("style", `filter:brightness(1)`);par1.setAttribute("style", `filter:brightness(1)`);
       i5.setAttribute("style", `filter:brightness(1)`);par5.setAttribute("style", `filter:brightness(1)`);
    });
    
    // El cursor entra en el menú
    $('#p5').mouseenter(function(){
      i2.setAttribute("style", `filter:brightness(0.5)`);par2.setAttribute("style", `filter:brightness(0.4)`);
        i3.setAttribute("style", `filter:brightness(0.5)`);par3.setAttribute("style", `filter:brightness(0.4)`);
        i4.setAttribute("style", `filter:brightness(0.5)`);par4.setAttribute("style", `filter:brightness(0.4)`);
        i1.setAttribute("style", `filter:brightness(0.5)`);par1.setAttribute("style", `filter:brightness(0.4)`);
    });

    // El cursor sale del menú
    $('#p5').mouseleave(function(){
        i2.setAttribute("style", `filter:brightness(1)`);par2.setAttribute("style", `filter:brightness(1)`);
       i3.setAttribute("style", `filter:brightness(1)`);par3.setAttribute("style", `filter:brightness(1)`);
       i4.setAttribute("style", `filter:brightness(1)`);par4.setAttribute("style", `filter:brightness(1)`);
       i1.setAttribute("style", `filter:brightness(1)`);par1.setAttribute("style", `filter:brightness(1)`);
    });

});
