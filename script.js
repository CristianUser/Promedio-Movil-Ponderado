var calculatePond = (nElement)=>{
    var array =[];
        let val=100;
      for(var i = nElement;i>0;i--){
        if(nElement<7){
          if (i>1){
            array.push(Math.round((val/i)/2));
          }else if(i==1){
          
            array.push(100-(array.reduce((a, b) => a + b, 0)));
          }
        }else{
          if (i>1){
            array.push(Math.round((val/i)/3));
          }else if(i==1){
          
            array.push(100-(array.reduce((a, b) => a + b, 0)));
          }
        }
      }
      return array;
    };
  $(document).ready(function () {


    $('#addButton').click(()=>{
      var period= ($('#bodyTable').children().length)+1;
      $("#bodyTable").append(`                  
          <tr>
            <td class="Periodo">`+period+`</td>
            <td class="Unidades input-table-td">
              <div class="input-field input-table">
                <input type="text" id="inputUnits" class="inputUnits validate">

              </div>
            </td>
            <td class="Ponderacion">100%</td>
          </tr>`);
          $('#bodyTable .Ponderacion').each(function (index, element) {
            this.innerHTML=(calculatePond($('#bodyTable').children().length)[index]);//+'%';
          });
      });
      $('#submitButton').click(()=>{
        var ponderacion = $('#bodyTable .Ponderacion'),
            unidades =$('#bodyTable .inputUnits'),
            units=0;
            $('#bodyTable').children().each(function (index, element) {
              units+=((unidades[index].value)*(ponderacion[index].innerHTML/100));
            });
            var period= ($('#bodyTable').children().length)+1;
            $("#bodyTable").append(` 
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>                 
          <tr>
            <td class="Periodo">`+period+`</td>
            <td class="Unidades input-table-td">`+units+`</td>
            <td class="Ponderacion"></td>
          </tr>`);
        
      $('#submitButton').addClass("disabled");
      });
    });