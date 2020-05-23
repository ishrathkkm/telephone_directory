import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  

  constructor() { 
  }
  getDummyData(){
  return [
    {name:"Esrath",age:27,mobile:9895442142,address:"Bangalore"},{name:"Muneer",age:67,mobile:4543234324,address:"Bangalore"},
    {name:"Issac",age:17,mobile:2321321321,address:"Chennai"},{name:"Arjun",age:77,mobile:543543543,address:"ITPL"},
    {name:"Karthik",age:47,mobile:2321321321,address:"SInga"},{name:"Thomas",age:87,mobile:324325436,address:"BAZAR"},
    {name:"Muqayyar",age:22,mobile:54545434,address:"Tirur"},{name:"Popins",age:67,mobile:3432432424,address:"City"},
    {name:"Agriculture",age:24,mobile:54645435,address:"India"},{name:"Devar",age:47,mobile:5645645643,address:"Bangalore"},
    {name:"DOny",age:23,mobile:324324324,address:"Kerala"},{name:"Developer",age:22,mobile:343243243,address:"Bangalore"},
    {name:"Sijil",age:27,mobile:345324324,address:"Delhi"},{name:"Umas",age:27,mobile:3243243254,address:"Bangalore"},
    {name:"Thommy",age:26,mobile:34325456,address:"Tanur"},{name:"Devi",age:23,mobile:234324454,address:"Bangalore"},
    {name:"JOhn",age:7,mobile:3455436546,address:"KOramanga"},{name:"Vidhya",age:26,mobile:32432432432,address:"Bangalore"},
    {name:"Xavier",age:57,mobile:9845435435,address:"Madiwala"},{name:"ROhit",age:21,mobile:3432432432,address:"Bangalore"},
  
  ]    
  }
}
