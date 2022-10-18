<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">port-killer</h3>

<div align="center">


</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## About <a name = "about"></a>

A process killer by port number app.</br>
Can be used as an API and CLI.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.


### Install

```
npm install --save port-process-killer
```

## Running tests <a name = "tests"></a>

```
npm run test
```


## 🎈 Usage <a name="usage"></a>

### Use as API <a name="use_api"></a>

You can use as an API to find out the pid that is using the port.
```
  import { getPid } from "port-process-killer";

  const pid = getPid(8080);
  console.log(`pid is: ${pid}`);
```
API example to kill the process that is being used by a port

```
  import { portKill } from "port-process-killer";

  portKill(8080);
```
If this did kill the process using the desired port, you can use the `-f` parameter which will use a `wmic delete` command which is stronger than the `taskkill` command

```
  import { portKill } from "port-process-killer";

  portKill(8080, -f);
```

### Use as CLI <a name="use_cmd"></a>

```
npm install --global port-process-killer
```

```
killProcess --port 8080
```

Use with force

```
killProcess --port 8080 -f
```

## ✍️ Authors <a name = "authors"></a>

- Creator: [@avishaik](https://github.com/avishaik)


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

Thanks for using port-process-killer, hope it does a killer job for you!
