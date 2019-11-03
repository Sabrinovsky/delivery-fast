class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: {message: 'Já existe esse e-mail no sistema'}
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :username, presence: true, uniqueness: true
  validates :kind, presence: true
  validates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }
end
