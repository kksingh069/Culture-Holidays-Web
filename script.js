document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchInput").addEventListener("click", function() {
        var options = document.getElementById("searchOptions");
        options.style.display = options.style.display === "block" ? "none" : "block";
    });
});

$(document).ready(function() {
    // Initial number of tabs
    var numTabs = 1;

    // Function to update tab content
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

    // Function to add tabs
    function addTabs() {
      numTabs++;
      updateTabContent();
    }

    // Function to remove tabs
    function removeTabs() {
      if (numTabs > 1) {
        numTabs--;
        updateTabContent();
      }
    }

    // Add tabs when + button is clicked
    $('#addTabs').click(function() {
      addTabs();
    });

    // Remove tabs when - button is clicked
    $('#removeTabs').click(function() {
      removeTabs();
    });

    // Update tab content on input change
    $('#tabs').on('input', function() {
      numTabs = parseInt($(this).val());
      updateTabContent();
    });
  });