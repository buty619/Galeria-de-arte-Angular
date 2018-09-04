$( ".cuadro" ).each( function () {
    $( this ).mouseenter( function () {
      $(".flecha").addClass( "rotar" );
      $(".texto").removeClass( "hide" );
    } );
    $(this).mouseleave( function () {
      $(".flecha").removeClass( "rotar" );
      $(".texto").addClass( "hide" );
    } );
  } );