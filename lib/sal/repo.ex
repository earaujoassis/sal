defmodule Sal.Repo do
  use Ecto.Repo,
    otp_app: :sal,
    adapter: Ecto.Adapters.Postgres
end
