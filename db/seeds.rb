# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(name:'Atendente', username:'atendente', email: 'atendente@teste.com', password:'123456', kind:'clerk')
User.create!(name:'Admin', username:'admin', email: 'admin@teste.com', password:'123456', kind:'admin')
User.create!(name:'Gerente', username:'gerente', email: 'gerente@teste.com', password:'123456', kind:'manager')
User.create!(name:'Cliente', username:'cliente', email: 'cliente@teste.com', password:'123456', kind:'manager')

DeliveryConfiguration.create!(radius: 10, max_time: 10)

# Product.create(code:1, description:'batata frita', price: 2.2)
# DeliveryConfiguration.create(max_time:12,radius:10)
