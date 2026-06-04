param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$ResumePath
)

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..."
    npm install
}

npm run build-resume-pdf -- $ResumePath
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
