# README

* Ruby 2.7.0, Rails 6+

* Install yarn and Redis

* Configuration: none

* rails db:migrate

* Database initialization

* How to run the test suite

    ```
      rails s
      # go to localhost:3000
      # in another shell
      rails c
      posts_creator = PostsCreator.new(title: "Sample Title", content: "Sample content")
      posts_creator.create
    ```

