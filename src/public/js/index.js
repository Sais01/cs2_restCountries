$(document).ready(() => {
  $.ajax({
      url: 'https://restcountries.com/v3.1/all',
      method: 'GET',
      success: (response) => {
          const renderCards = (countries) => {
              let cardsHtml = '';
              countries.forEach((country) => {
                  cardsHtml += '<div class="col mb-4" style="margin-top: 1rem;">';
                  cardsHtml += `<a style="display:block" href="/country/${country.name.common}">`;
                  cardsHtml += '<div class="card text-center">';
                  cardsHtml += '<img src="' + country.flags.png + '" style="height: 165px;" class="card-img-top" alt="' + country.flags.alt + ' Flag">';
                  cardsHtml += '<div class="card-body">';
                  cardsHtml += '<h5 class="card-title">' + country.name.common + '</h5>';
                  cardsHtml += '<p class="card-text">';
                  cardsHtml += '<img src="/img/population.png" style="width: 1rem;">';
                  cardsHtml += ' '+ country.population + '</p>';
                  cardsHtml += '</div>';
                  cardsHtml += '</div>';
                  cardsHtml += '</a>';
                  cardsHtml += '</div>';
              });
              $('#rowCards').html(cardsHtml);
          }

          // Order countries by name
          response.sort((a, b) => {
              let nameA = a.name.common.toUpperCase();
              let nameB = b.name.common.toUpperCase();
              if (nameA < nameB) {
                  return -1;
              }
              if (nameA > nameB) {
                  return 1;
              }
              return 0;
          });

          renderCards(response);

          
      },
      error: () => {
          document.location.href = '/notFound';
      }
  });
});
 
$("#search-input").on('keyup', function() {
  let filter = $(this).val().toLowerCase();
  $('.col').each(function() {
      let countryName = $(this).find('.card-title').text().toLowerCase();
      if (countryName.includes(filter)) {
          $(this).removeClass('hidden-card');
      } else {
          $(this).addClass('hidden-card');
      }
  });
});

