'use client';
// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Unkempt } from "next/font/google";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { useConfiguration } from "@/providers/configuration-provider";
import { Input } from "../ui/input";
import { useState } from "react";


const unkempt = Unkempt({
  weight: '700',
  display: 'swap',
  subsets: ["latin"]
});

export function AppSidebar() {
  const { toggleBorders, toggleHints, 
          operators, addOperator, removeOperator,
          numberOfAdd, numberOfSubtract, numberOfMultply, numberOfDivide, setNumberOfAdd, setNumberOfSubtract, setNumberOfMultiply, setNumberOfDivide, 
          numberTopMin, numberTopMax, numberBottomMin, numberBottomMax, setNumberTopMin, setNumberTopMax, setNumberBottomMin, setNumberBottomMax } = useConfiguration();


  function handleOperator(value: boolean, operator: string) {
    if (value) {
      addOperator(operator);
    } else {
      removeOperator(operator);
    }
  }

  return (
    <Sidebar >
      <SidebarHeader>
        <div className={`flex justify-center ${unkempt.className} text-4xl`}>Math Sheet</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-5">Numbers</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex flex-col mb-2">
                <Label htmlFor="top-number">Top Value Range:</Label>
                <div>
                  <Input id="top-number" type="number" value={numberTopMin} className="w-20" onChange={(e) => setNumberTopMin(e.target.value)}></Input>
                  <span className="pl-5 pr-5">to</span>
                  <Input id="top-number" type="number" value={numberTopMax} className="w-20" onChange={(e) => setNumberTopMax(e.target.value)}></Input>
                </div>
              </SidebarMenuItem>
              <SidebarMenuItem className="flex flex-col mb-2">
                <Label htmlFor="bottom-number">Bottom Value Range:</Label>
                <div>
                  <Input id="bottom-number" type="number" value={numberBottomMin} className="w-20" onChange={(e) => setNumberBottomMin(e.target.value)}></Input>
                  <span className="pl-5 pr-5">to</span>
                  <Input id="bottom-number" type="number" value={numberBottomMax} className="w-20" onChange={(e) => setNumberBottomMax(e.target.value)}></Input>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-5">Operation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex mb-2 justify-between">
                <div className="flex items-center">
                  <Switch id="operator-add" onCheckedChange={(e) => handleOperator(e, "add")} checked={operators.includes('add')}/>
                  <Label htmlFor="operator-add" className="pl-2" >Add</Label>
                </div>
                <div>
                  <Input type="number" value={numberOfAdd} onChange={(e) => setNumberOfAdd(e.target.value)} className="w-20" disabled={!operators.includes('add')}></Input>
                </div>
              </SidebarMenuItem>
              <SidebarMenuItem className="flex mb-2 justify-between">
                <div className="flex items-center">
                  <Switch id="operator-substract" onCheckedChange={(e) => handleOperator(e, "subtract")} checked={operators.includes('subtract')}/>
                  <Label htmlFor="operator-subtract" className="pl-2" >Substract</Label>
                </div>
                <div>
                  <Input type="number" value={numberOfSubtract} onChange={(e) => setNumberOfSubtract(e.target.value)} className="w-20" disabled={!operators.includes('subtract')}></Input>
                </div>
              </SidebarMenuItem>
              <SidebarMenuItem className="flex mb-2 justify-between">
                <div className="flex items-center">
                  <Switch id="operator-multiply" onCheckedChange={(e) => handleOperator(e, "multiply")} checked={operators.includes('multiply')}/>
                  <Label htmlFor="operator-multiply" className="pl-2" >Multiply</Label>
                </div>
                <div>
                  <Input type="number" value={numberOfMultply} onChange={(e) => setNumberOfMultiply(e.target.value)} className="w-20" disabled={!operators.includes('multiply')}></Input>
                </div>
              </SidebarMenuItem>
              <SidebarMenuItem className="flex mb-2 justify-between">
                <div className="flex items-center">
                  <Switch id="operator-divide" onCheckedChange={(e) => handleOperator(e, "divide")} disabled={true} checked={operators.includes('divide')}/>
                  <Label htmlFor="operator-divide" className="pl-2" >Divide</Label>
                </div>
                <div>
                  <Input type="number" value={numberOfDivide} onChange={(e) => setNumberOfDivide(e.target.value)} className="w-20" disabled={!operators.includes('divide')}></Input>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-5">Look & Feel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex mb-2">
                <Switch id="space-borders" onCheckedChange={toggleBorders} />
                <Label htmlFor="space-borders" className="pl-2" >Space Borders</Label>
              </SidebarMenuItem>
              <SidebarMenuItem className="flex mb-2">
                <Switch id="space-hints" onCheckedChange={toggleHints} />
                <Label htmlFor="space-hints" className="pl-2" >Space Hints</Label>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div>{operators}</div>
      </SidebarFooter>
    </Sidebar>
  )
}