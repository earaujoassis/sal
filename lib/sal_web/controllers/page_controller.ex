defmodule SalWeb.PageController do
  use SalWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
