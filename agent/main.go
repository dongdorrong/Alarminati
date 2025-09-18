// agent/main.go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "os"
    "time"
)

type Healthz struct {
    Cluster string `json:"cluster"`
    Status  string `json:"status"`
    Time    string `json:"time"`
}

func main() {
    http.HandleFunc("/healthz", func(w http.ResponseWriter, r *http.Request) {
        health := Healthz{
            Cluster: os.Getenv("CLUSTER_NAME"),
            Status:  "ok",
            Time:    time.Now().Format(time.RFC3339),
        }
        json.NewEncoder(w).Encode(health)
    })

    fmt.Println("Listening on :8080")
    http.ListenAndServe(":8080", nil)
}
