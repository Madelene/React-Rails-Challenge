json.posts(@posts) do |post|
  json.extract! post, :id, :title, :body, :published, :factorial
  json.url api_post_url(post, format: :json)
end

