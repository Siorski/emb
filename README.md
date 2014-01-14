# Projekt zespołowy 2

## Ogólny opis aplikacji
![Logo Ember](http://i43.tinypic.com/14v1cms.png)

Stworzyliśmy prostą aplikację przy użyciu Ruby on Rails oraz [Ember.js](http://emberjs.com/). Aplikacja może służyć jako blog, internetowy pamiętnik, zbiór przepisów kulinarnych czy po prostu notatnik. W naszej aplikacji aby uzyskać dostęp do jej głównej części, musimy się zalogować (wcześniej tworząc konto). Do umożliwienia logowania wykorzystaliśmy koncepcję [ember-simple-auth](https://github.com/simplabs/ember-simple-auth). 

## Materiały pomocnicze
Był to nasz pierwszy kontakt z technologią Ember.js, więc sporo korzystaliśmy z materiałów znalezionych w sieci. Najważniejszym źródłem informacji są [Guides](http://emberjs.com/guides/) na głównej stronie Ember.js. Ember korzysta z szablonów stron (templates) wykorzystując bibliotekę [Handlebars.js](http://handlebarsjs.com/). Przydane były też filmiki z YouTube :
- Tom Dale, [Building an Ember.js Application](http://www.youtube.com/watch?v=1QHrlFlaXdI)
- Yehuda Katz,
  * [Building Web Applications with Ember.js](http://www.youtube.com/watch?v=u6RFyVN9sNg)
  * [Building a Client-Side With Ember and Rails](http://www.youtube.com/watch?v=BpQj9_qEUAc)

Bardzo pomocnym narzędziem jest wtyczka [Ember Inspector](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi) do przeglądarki Chrome. Dzięki niej możemy podejrzeć routing, zobaczyć dane z Ember Data i ogólnie zobaczyć informację na temat naszej aplikacji.

## Screeny
![Wpis screen](http://i44.tinypic.com/30axlyw.jpg "Przykładowy wpis")

![Logowanie screen](http://i43.tinypic.com/16kupnk.jpg "Logowanie")

![Dostęp](http://i44.tinypic.com/s4me0m.jpg "Brak dostępu")

![Nowy wpis](http://i41.tinypic.com/315jw9x.jpg "Dodawanie wpisu")

![Ember Inspector](http://i44.tinypic.com/2dcgyzb.jpg "Routing aplikacji w Ember Inspector")
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
![Błąd](http://i39.tinypic.com/106a5om.jpg "Błąd")

Identyczny błąd występuje przy próbie rejestracji nowego, "pustego" użytkownika.

##Autorzy
* *Adrian Elszkowski*
* *Kacper Siora*

## OT
Świetna [dyskusja](http://vimeo.com/68215606). Walka pomiędzy Ember.js a Angularem.
