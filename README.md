# Projekt zespołowy 2

## Ogólny opis aplikacji
![Logo Ember](http://i43.tinypic.com/14v1cms.png)

Stworzyliśmy prostą aplikacje przy użyciu Ruby on Rails oraz [Ember.js](http://emberjs.com/). Aplikacja może służyć jako blog, internetowy pamiętnik, zbiór przepisów kulinarnych czy po prostu do spisania naszych przemyśleń. W naszej aplikacji aby uzyskać dostęp do jej głównej części, musimy się zalogować (wcześniej tworząc konto). Do umożliwienia logowania wykorzystaliśmy koncepcję [ember-simple-auth](https://github.com/simplabs/ember-simple-auth). 

## Materiały pomocnicze
Jako że był to nasz pierwszy kontakt z technologią Ember.js sporo korzystaliśmy z materiałów znalezionych w sieci. Najważniejszym źródłem informacji są [Guides](http://emberjs.com/guides/) na głównej stronie Ember.js. Ember korzysta z szablonów stron (templates) wykorzystując bibliotekę [Handlebars.js](http://handlebarsjs.com/). Przydane są filmiki, które można znaleźć na serwisie Youtube :
- Tom Dale - [Building an Ember.js Application](http://www.youtube.com/watch?v=1QHrlFlaXdI)
- Yehuda Katz - [Building Web Applications with Ember.js](http://www.youtube.com/watch?v=u6RFyVN9sNg)
- Yehuda Katz - [Building a Client-Side With Ember and Rails](http://www.youtube.com/watch?v=BpQj9_qEUAc)

Bardzo pomocnym narzędziem jest wtyczka [Ember Inspector](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) do przeglądarki Chrome. Dzięki niej możemy podejrzeć routing, zobaczyć dane z Ember Data i ogólnie zobaczyć informację na temat naszej aplikacji.

## Screeny
![Wpis screen](http://i43.tinypic.com/2ppdjbp.png "Przykładowy wpis")

![Logowanie screen](http://i39.tinypic.com/2h54a5g.png "Logowanie")

![Dostęp](http://i41.tinypic.com/10gfamu.png "Brak dostępu")

![Nowy wpis](http://i40.tinypic.com/29wjo80.png "Dodawanie wpisu")

## Problem
Napotkaliśmy problem z walidacją w Ember.js. Walidacja przy dodawaniu nowego wpisu: 
```ruby
class Story < ActiveRecord::Base
	validates :title, presence: true
	validates :body, presence: true
	validates :author, presence: true
end
```
Przy próbie stworzenia pustego wpisu (lub w przypadku nie wypełnienia przynajmniej jednego pola) nie zostaje on dodany do naszej bazy danych, natomiast dane są dodawane w Ember Data i wyświetlane poprzez Ember Inspector oraz na samej stronie. Po odświeżeniu strony ślad po "pustym" wpisie znika.
![Błąd](http://i44.tinypic.com/2a98cd3.png "Błąd")

Identyczny błąd występuje przy próbie rejestracji nowego, "pustego" użytkownika.

##Autorzy
* *Adrian Elszkowski*
* *Kacper Siora*

## OT
Świetna [dyskusja](http://vimeo.com/68215606). Walka pomiędzy Ember.js a Angularem.