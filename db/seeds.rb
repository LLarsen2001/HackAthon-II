# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# Post.destroy_all
# User.destroy_all

Post.destroy_all
User.destroy_all

10.times do
    name = Faker::Name.first_name
   u = User.create(
        email:(name + "@test.com"),
        name:name,
        password: 123456
       
    )
    5.times do
        Post.create(
            title: Faker::Movie.title,
            body:Faker::Movie.quote,
            user_id: u.id
        )
    end
    puts "User size:#{User.all.size}"
    puts "Post size:#{Post.all.size}"
   
end

