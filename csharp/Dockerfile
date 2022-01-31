FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY csharp.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app .
EXPOSE 8888-8889
ENTRYPOINT ["dotnet", "csharp.dll"]
