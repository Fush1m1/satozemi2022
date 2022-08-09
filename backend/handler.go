package main

import (
    "net/http"
    "github.com/labstack/echo/v4"
	// "github.com/labstack/echo/v4/middleware"
)

func MainPage() echo.HandlerFunc {
    return func(c echo.Context) error {    
		testJson := map[string]string{
			"id":"1",
			"name":"sato",
		}

        return c.JSON(http.StatusOK, testJson)
    }
}

func GetArticles() echo.HandlerFunc  {
	return func(c echo.Context) error {
		articleJson := map[string]string{
			"id":"1",
			"title":"title1",
			"body":"hogehogehoge",
	}


		return c.JSON(http.StatusOK,articleJson)
	}
}