<script type="text/javascript">
      function enterKey(evt) {
      var evt = (evt) ? evt : event
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if (charCode == 13) {
      searchPrimo()
      }
      }
      function searchPrimo() {
      document.getElementById("primoQuery").value = document.getElementById("primoFieldTemp").value + ",contains," +
      document.getElementById("primoQueryTemp").value + ",AND";

      document.forms["searchForm"].submit();
      }
      function searchPrimoEvent(event) {
      if (event && event.which == 13) {
      document.getElementById("primoQuery").value = document.getElementById("primoFieldTemp").value + ",contains," +
      document.getElementById("primoQueryTemp").value + ",AND";
      document.forms["searchForm"].submit();
      }
      else
      return true;
      }
 </script> 