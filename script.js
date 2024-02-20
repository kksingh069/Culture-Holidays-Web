document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchInput").addEventListener("click", function() {
        var options = document.getElementById("searchOptions");
        options.style.display = options.style.display === "block" ? "none" : "block";
    });
});

$(document).ready(function() {
    // Initial number of tabs
    var numTabs = 1;

    function updateTabContent() {
      $('#tabContent').empty();
      for (var i = 1; i <= numTabs; i++) {
        var tabContent = '<div class="tab-pane fade" id="tab' + i + '">';
        tabContent += '<h3>Tab ' + i + '</h3>';
        tabContent += '<p>This is tab ' + i + ' content.</p>';
        tabContent += '</div>';
        $('#tabContent').append(tabContent);
      }
    }

    
    function addTabs() {
      numTabs++;
      updateTabContent();
    }

   
    function removeTabs() {
      if (numTabs > 1) {
        numTabs--;
        updateTabContent();
      }
    }

    $('#addTabs').click(function() {
      addTabs();
    });


    $('#removeTabs').click(function() {
      removeTabs();
    });

    $('#tabs').on('input', function() {
      numTabs = parseInt($(this).val());
      updateTabContent();
    });
  });

//   function showGuestOptions(guests) {
//     document.getElementById('guestDropdownMenuLink').innerText = "Select Number of Guests: " + guests;
// }

function showRoomDropdown(rooms) {
  document.getElementById('roomDropdownMenuLink').innerText = "Select No of Rooms: " + rooms;

  var roomOptions = document.getElementById('roomOptionsContainer');
  roomOptions.innerHTML = '';

  for (let i = 1; i <= rooms; i++) {
      var roomSection = document.createElement('div');
      roomSection.className = 'room-section';
      roomSection.innerHTML = `
          <h4>Room ${i}</h4>
          <div class="travelers-dropdown">
              <label for="numTravelersRoom${i}">Number of Travelers:</label>
              <select id="numTravelersRoom${i}" name="numTravelersRoom${i}" onchange="showGuestTables(${i}, this.value)">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <!-- Add more options as needed -->
              </select>
          </div>
          <div id="guestTablesRoom${i}"></div>
          <p>Room details here</p>`;
      roomOptions.appendChild(roomSection);
  }
}
function showGuestTables(room, numTravelers) {
  var guestTablesContainer = document.getElementById(`guestTablesRoom${room}`);
  var dropDownContainer = document.getElementById(`numTravelersContainer${room}`);
  guestTablesContainer.innerHTML = '';

  if (numTravelers > 0) {
      for (let j = 1; j <= numTravelers; j++) {
          var guestTable = document.createElement('div');
          guestTable.className = 'guest-table-container';
          guestTable.innerHTML = `
              <table class="guest-table">
                  <tr>
                      <th colspan="2">Guest ${j}</th>
                  </tr>
                  <tr>
                      <td><input type="text" id="firstNameRoom${room}_${j}" placeholder="First Name"></td>
                      <td><input type="text" id="lastNameRoom${room}_${j}" placeholder="Last Name"></td>
                  </tr>
              </table>`;
          guestTablesContainer.appendChild(guestTable);
      }
  }
  
  // Insert guestTablesContainer after dropDownContainer
  dropDownContainer.parentNode.insertBefore(guestTablesContainer, dropDownContainer.nextSibling);
}




