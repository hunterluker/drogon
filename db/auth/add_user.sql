insert into drogon_user
(email, password)
values (${email}, ${password})
returning email, user_id;