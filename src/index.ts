import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

//Create an obj thah satisfies the DataReader interface
// const csvFileReader = new CsvFileReader("football.csv"); //создается еласс со свойствами дата и медодом Считай csv file

//create instance of MatchReader and pass in somthng sotisfying DataReader interface
// const matchReader = new MatchReader(csvFileReader); //добавляет к классу метод лоад, действие которого описано ниже
// matchReader.load(); //делает из data массив с массивами туплсов (разбивает строку на дату, название команд, забитые голы с типом наибер и тд и добавляет эту инфу свойству matches)

/*
const summary = new Summary(new WinsAnalysis("Liverpool"), new HtmlReport()); //делаем класс итог, пробрасываем в него два класса: анализатор (побед) и класс с методом создатьРапорт
summary.buildAndPrintReport(matchReader.matches); //создаём рапорт
*/

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man City");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
