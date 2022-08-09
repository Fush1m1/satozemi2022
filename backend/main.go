package main

import (
	// "net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

// var e = createMux()/

func main() {

	e := echo.New()
	e.Use(middleware.Logger())
    e.Use(middleware.Recover())
	e.Use(middleware.CORS())


	e.GET("/", MainPage())
	e.GET("/articles",GetArticles())

	e.Logger.Fatal(e.Start(":4000"))
}
