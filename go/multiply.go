
package main
 
import (
	"encoding/json"
    "log"
	"net/http"
	"fmt"
	
	"github.com/gorilla/mux"
)

type Operands struct {
    OperandOne float32 `json:"operandOne,string"`
    OperandTwo float32 `json:"operandTwo,string"`
}

type Result struct {
	Result float32 `json:"result"`
}

func multiply(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	var operands Operands
	json.NewDecoder(r.Body).Decode(&operands)
	var result Result
	result.Result = operands.OperandOne * operands.OperandTwo
	fmt.Println(fmt.Sprintf("%s%f%s%f", "Multiplying ", operands.OperandOne, " and ", operands.OperandTwo))
	json.NewEncoder(w).Encode(result)
}
 
func main() {
	router := mux.NewRouter()
	
	router.HandleFunc("/multiply", multiply).Methods("POST", "OPTIONS")
	log.Fatal(http.ListenAndServe(":7286", router))
}