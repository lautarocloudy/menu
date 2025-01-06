Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /k C:\CAMPOGI\CAMPOGI.BAT"
WScript.Sleep 2000 ' Espera 2 segundos para que el programa se inicie
WshShell.AppActivate "CAMPO DE GECTION INFORMÁTICA"
