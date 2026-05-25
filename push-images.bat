@echo off
cd /d "C:\Users\18991\Portfolio"
git add static/images/fieldwork/
git commit -m "Update fieldwork images"
git pull origin main --rebase
git push origin main
echo.
echo Done! Images pushed to GitHub.
pause
